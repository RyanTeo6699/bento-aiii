import { NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedProjectTypes = new Set([
  "ai-application",
  "llm-system",
  "workflow-design",
  "platform-delivery",
  "advisory"
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  message: string;
  website?: string;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

async function forwardWithResend(payload: ContactPayload, reference: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !inbox || !from) {
    return;
  }

  const html = `
    <h2>Bento AIII inquiry</h2>
    <p><strong>Reference:</strong> ${escapeHtml(reference)}</p>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Company or team:</strong> ${escapeHtml(payload.company || "Not provided")}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Inquiry type:</strong> ${escapeHtml(payload.projectType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [inbox],
      reply_to: payload.email,
      subject: `Bento AIII inquiry ${reference}`,
      html
    })
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const payload: ContactPayload = {
    name: readString(body.name),
    company: readString(body.company),
    email: readString(body.email),
    projectType: readString(body.projectType),
    message: readString(body.message),
    website: readString(body.website)
  };

  const reference = `BA-${Date.now().toString(36).toUpperCase()}`;

  if (payload.website) {
    return NextResponse.json({
      ok: true,
      message: "Inquiry received.",
      reference
    });
  }

  const errors: string[] = [];

  if (payload.name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!emailPattern.test(payload.email)) {
    errors.push("A valid email address is required.");
  }

  if (!allowedProjectTypes.has(payload.projectType)) {
    errors.push("Select a valid inquiry type.");
  }

  if (payload.message.length < 24) {
    errors.push("Project brief must be at least 24 characters.");
  }

  if (payload.message.length > 2400) {
    errors.push("Project brief is too long.");
  }

  if (payload.company.length > 120) {
    errors.push("Company or team field is too long.");
  }

  if (errors.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: errors[0],
        reference
      },
      { status: 400 }
    );
  }

  console.info(
    "[contact]",
    JSON.stringify({
      ...payload,
      reference,
      submittedAt: new Date().toISOString()
    })
  );

  try {
    await forwardWithResend(payload, reference);
  } catch (error) {
    console.error("[contact:forward]", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Inquiry reached the site backend, but email forwarding is not configured correctly. Please email hello@bentoaiii.com if this continues.",
        reference
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry received. Bento AIII will follow up by email.",
    reference
  });
}
