import { NextRequest, NextResponse } from "next/server";

/**
 * Mailing list subscribe endpoint - connected to EmailOctopus.
 *
 * Requires two environment variables, set in .env.local for local
 * development and in your hosting provider's environment variable
 * settings (e.g. Vercel -> Project -> Settings -> Environment Variables)
 * for production. Never commit these values to the repo.
 *
 *   EMAILOCTOPUS_API_KEY   - generated under Account -> Integrations & API
 *   EMAILOCTOPUS_LIST_ID   - the ID of the list/audience to add contacts to
 *
 * EmailOctopus API docs:
 * https://emailoctopus.com/api-documentation/lists/create-contact
 */
export async function POST(request: NextRequest) {
  let email: string | undefined;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  const listId = process.env.EMAILOCTOPUS_LIST_ID;

  if (!apiKey || !listId) {
    console.error(
      "[subscribe] Missing EMAILOCTOPUS_API_KEY or EMAILOCTOPUS_LIST_ID environment variable."
    );
    return NextResponse.json(
      { error: "Mailing list is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email_address: email,
          status: "SUBSCRIBED",
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({ ok: true });
    }

    const data = await response.json().catch(() => null);

    // EmailOctopus returns this error code if the email is already on
    // the list -- treat that as a success from the user's point of
    // view, since they're already subscribed.
    const errorCode = data?.error?.code;
    if (errorCode === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
      return NextResponse.json({ ok: true });
    }

    console.error("[subscribe] EmailOctopus API error:", data);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  } catch (err) {
    console.error("[subscribe] Network error contacting EmailOctopus:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }
}
