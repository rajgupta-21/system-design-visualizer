export const verificationEmailTemplate = (verifyUrl: string) => {
  return `
    <div style="font-family: Arial;">
      <h2>Email Verification</h2>
      <p>Click below to verify your email:</p>
      <a href="${verifyUrl}" target="_blank">
        Verify Email
      </a>
      <p>This link will expire soon.</p>
    </div>
  `;
};
