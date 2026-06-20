import { NextRequest, NextResponse } from "next/server";

/**
 * Mailing list subscribe endpoint — scaffold only.
 *
 * To connect a real provider, replace the TODO block below. Examples:
 *
 * Mailchimp:
 *   const res = await fetch(
 *     `https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members`,
 *     {
 *       method: "POST",
 *       headers: {
 *         Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
 *         "Content-Type": "application/json",
 *       },
 *       body: JSON.stringify({ email_address: email, status: "subscribed" }),
 *     }
 *   );
 *
 * ConvertKit:
 *   const res = await fetch(
 *     `https://api.convertkit.com/v3/forms/<form_id>/subscribe`,
 *     {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json" },
 *       body: JSON.stringify({
 *         api_key: process.env.CONVERTKIT_API_KEY,
 *         email,
 *       }),
 *     }
 *   );
 *
 * Remember to add the relevant API key(s) to your environment variables
 * (.env.local for development, your host's env settings for production)
 * and never commit secrets to the repo.
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

  // TODO: wire up a real email provider (Mailchimp, ConvertKit, Beehiiv,
  // etc.) here. For now this just logs and returns success so the form
  // is fully functional end-to-end once a provider is connected.
  console.log("[subscribe] new signup:", email);

  return NextResponse.json({ ok: true });
}
