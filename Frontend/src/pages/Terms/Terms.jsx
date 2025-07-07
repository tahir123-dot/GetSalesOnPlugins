import React from "react";

const sections = [
  {
    title: "Introduction",
    content: `These Website Standard Terms and Conditions written on this webpage shall manage your use of this website. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

Minors or people below 18 years old are not allowed to use this Website.`,
  },
  {
    title: "Intellectual Property Rights",
    content: `Other than the content you own, under these Terms, EXTRAPLUGINS and/or its licensors own all the intellectual property rights and materials contained in this Website.

You are granted limited license only for purposes of viewing the material contained on this Website.`,
  },
  {
    title: "Restrictions",
    content: `You are specifically restricted from all of the following:
- Publishing any Website material in any other media
- Selling, sublicensing and/or otherwise commercializing any Website material
- Publicly performing and/or showing any Website material
- Using this Website in any way that is or may be damaging to this Website
- Using this Website in any way that impacts user access to this Website
- Using this Website contrary to applicable laws and regulations, or in any way may cause harm
- Engaging in any data mining, harvesting, extracting or similar activity
- Using this Website to engage in advertising or marketing

Certain areas are restricted and may be further restricted at EXTRAPLUGINS discretion. All user IDs and passwords must be kept confidential.`,
  },
  {
    title: "Your Content",
    content: `“Your Content” means any audio, video, text, images, or other material you display on this Website. You grant EXTRAPLUGINS a non-exclusive, worldwide, irrevocable, sublicensable license to use, reproduce, publish, translate, and distribute it.

Your Content must be original and not violate third-party rights. EXTRAPLUGINS may remove it anytime.`,
  },
  {
    title: "1 Month Warranties",
    content: `You can test the software for one month. If you face any issue, please let us know.`,
  },
  {
    title: "Limitation of Liability",
    content: `EXTRAPLUGINS and its staff shall not be liable for any damages connected to your use of this website.`,
  },
  {
    title: "Indemnification",
    content: `You agree to indemnify EXTRAPLUGINS from all liabilities, damages, and expenses arising from your breach of terms.`,
  },
  {
    title: "Severability",
    content: `If any provision is invalid, it shall be deleted without affecting the rest of the terms.`,
  },
  {
    title: "Variation of Terms",
    content: `EXTRAPLUGINS may revise these Terms anytime. Please check them regularly.`,
  },
  {
    title: "Assignment",
    content: `EXTRAPLUGINS may assign or transfer its rights and obligations. You may not assign or transfer yours.`,
  },
  {
    title: "Entire Agreement",
    content: `These Terms are the entire agreement between EXTRAPLUGINS and you.`,
  },
  {
    title: "Governing Law & Jurisdiction",
    content: `These Terms are governed by New York law. You submit to its courts for disputes.`,
  },
  {
    title: "Installing Service",
    content: `You must agree to our remote install service for fixing plugin issues. If you do not agree, we cannot help much.`,
  },
  {
    title: "Using Someone Else’s Info",
    content: `Using someone else’s card or sharing your account will result in suspension unless verified.`,
  },
  {
    title: "Fraudulent Claims",
    content: `Filing a chargeback after purchase is fraudulent. It may result in permanent suspension.`,
  },
  {
    title: "Proxy/VPN",
    content: `Using a proxy or VPN to create or buy an account leads to instant ban.`,
  },
  {
    title: "Refund & Returns",
    content: `You must agree to our refund and returns policy.`,
  },
  {
    title: "3 Years Order Validity",
    content: `Orders stay in your account for 36 months only. After that, re-purchase is required.`,
  },
  {
    title: "No Complimentary Upgrade",
    content: `You only receive updates for the same version, not free upgrades.`,
  },
  {
    title: "Lifetime Customer Support",
    content: `EXTRAPLUGINS offers lifetime customer support per order.`,
  },
  {
    title: "Account Removal Request",
    content: `If you request account removal, it will be deleted with all orders and downloads. No refunds provided.

If you do not agree to our terms, do not buy from EXTRAPLUGINS.`,
  },
];

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        Terms and Conditions
      </h1>

      <div className="space-y-10 text-gray-700 text-sm leading-relaxed">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {section.title}
            </h2>
            <p className="whitespace-pre-line">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
