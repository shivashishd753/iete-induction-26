import { Resend } from "resend";
import ejs from "ejs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInductionEmail({
  name,
  email,
}) {
  const templatePath = path.join(
    process.cwd(),
    "src",
    "emails",
    "induction-confirmation.ejs"
  );

  const html = await ejs.renderFile(templatePath, {
    name,
  });

  const { data, error } = await resend.emails.send({
    from: "IETE-SF <onboarding@resend.dev>",
    to: [email],
    subject: "IETE-SF Induction '26 — Application Received",
    html,
  });

  if (error) {
    console.error("RESEND ERROR:", error);
    throw new Error("Email could not be sent.");
  }

  return data;
}