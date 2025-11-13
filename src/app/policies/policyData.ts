import type { JSX } from "react";
export const policyData: Record<
    string,
    {
        title: string;
        description?: string;
        image?: string;
        sections: { id: string; heading: string; content: string | React.ReactNode }[];
    }
> = {
     "privacy-policy": {
        title: "Privacy Policy",
        description: "Learn how Ahtsham Web Mentor handles your data securely.", // ✅ add this
        image: "https://ahtsham.me/default-og.jpg", // ✅ add this for social sharing
        sections: [
            {
                id: "effective-date",
                heading: "Effective Date & Last Updated",
                content: `
          <p><strong>Effective Date:</strong> October 13, 2025<br/>
          <strong>Last Updated:</strong> October 13, 2025</p>
        `,
            },
            {
                id: "introduction",
                heading: "1. Introduction",
                content: `
          <p>Welcome to <strong>Ahtsham Web Mentor (AWM)</strong> (“we”, “us”, or “our”). 
          This Privacy Policy explains how we collect, use, disclose, and protect your personal information 
          when you visit <a href="https://ahtsham.me" target="_blank" class="text-purple-400 hover:text-purple-300 underline">https://ahtsham.me</a> (the “Site”).</p>
          <p>We are committed to respecting your privacy and complying with applicable data protection laws, 
          including those in the <strong>United States</strong>, <strong>United Kingdom</strong>, and <strong>Canada</strong>.</p>
        `,
            },
            {
                id: "information-we-collect",
                heading: "2. Information We Collect",
                content: `
          <h4 class="text-lg font-semibold text-white mt-4">2.1 Personal Information</h4>
          <p>We may collect personal data that you voluntarily provide, including:</p>
          <ul class="list-disc pl-6 text-gray-400">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name (if applicable)</li>
            <li>Any message or details you include in contact forms or email communications</li>
          </ul>

          <h4 class="text-lg font-semibold text-white mt-6">2.2 Non-Personal Information</h4>
          <p>When you use the Site, we automatically collect certain data such as:</p>
          <ul class="list-disc pl-6 text-gray-400">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Referring URLs</li>
            <li>Pages visited and time spent on the Site</li>
          </ul>
          <p>We may use cookies and similar tracking technologies to analyze usage and enhance the user experience.</p>
        `,
            },
            {
                id: "how-we-use-information",
                heading: "3. How We Use Your Information",
                content: `
          <p>We use collected information to:</p>
          <ul class="list-disc pl-6 text-gray-400">
            <li>Communicate with you and respond to inquiries</li>
            <li>Provide services or resources you request</li>
            <li>Send newsletters or updates (only if you opt-in)</li>
            <li>Improve our website, design, and user experience</li>
            <li>Comply with legal or regulatory obligations</li>
          </ul>
        `,
            },
            {
                id: "sharing-of-information",
                heading: "4. Sharing of Information",
                content: `
          <p>We do <strong>not</strong> sell or rent your personal information. We may share your data:</p>
          <ul class="list-disc pl-6 text-gray-400">
            <li>With trusted service providers who assist in operating the Site (subject to confidentiality agreements)</li>
            <li>To comply with legal requirements, court orders, or governmental requests</li>
            <li>In the event of a business transfer such as a merger or sale</li>
          </ul>
        `,
            },
            {
                id: "cookies-tracking",
                heading: "5. Cookies & Tracking",
                content: `
          <p>We use cookies to personalize content, analyze traffic, and enhance usability. 
          You may disable cookies through your browser settings, but some site features may not function properly.</p>
        `,
            },
            {
                id: "international-data-transfer",
                heading: "6. International Data Transfer",
                content: `
          <p>As our servers or service providers may be located in multiple regions, 
          your information may be transferred outside your country of residence. 
          We ensure such transfers comply with applicable data protection laws and apply adequate safeguards.</p>
        `,
            },
            {
                id: "your-rights",
                heading: "7. Your Rights",
                content: `
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul class="list-disc pl-6 text-gray-400">
            <li>Access or request a copy of your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion (“right to be forgotten”)</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Object to or restrict processing</li>
          </ul>
          <p>To exercise these rights, contact <a href="mailto:info@ahtsham.me" class="text-purple-400 hover:text-purple-300 underline">info@ahtsham.me</a>.</p>
        `,
            },
            {
                id: "security",
                heading: "8. Security",
                content: `
          <p>We use industry-standard technical and organizational measures to protect your data. 
          However, no transmission over the internet is completely secure, 
          and we cannot guarantee absolute protection.</p>
        `,
            },
            {
                id: "children-privacy",
                heading: "9. Children's Privacy",
                content: `
          <p>Our Site is not intended for individuals under <strong>16 years of age</strong>. 
          We do not knowingly collect data from children. 
          If we learn we have done so, we will delete it immediately.</p>
        `,
            },
            {
                id: "updates",
                heading: "10. Updates to This Policy",
                content: `
          <p>We may update this Privacy Policy periodically. 
          Any revisions will be posted here, with the updated effective date.</p>
        `,
            },
            {
                id: "contact",
                heading: "11. Contact Us",
                content: `
          <p><strong>Ahtsham Web Mentor (AWM)</strong><br/>
          📍 Gulberg II, Lahore, Pakistan<br/>
          📧 <a href="mailto:info@ahtsham.me" class="text-purple-400 hover:text-purple-300 underline">info@ahtsham.me</a><br/>
          🌐 <a href="https://ahtsham.me" target="_blank" class="text-purple-400 hover:text-purple-300 underline">https://ahtsham.me</a></p>
        `,
            },
        ],
    },

    "terms-and-conditions": {
        title: "Terms and Conditions",
        description: "Important Terms and conditions information about using Ahtsham Web Mentor services.",
        image: "https://ahtsham.me/default-og.jpg",
        sections: [
            {
                id: "effective-date",
                heading: "Effective Date & Last Updated",
                content: `
          <p><strong>Effective Date:</strong> October 13, 2025<br/>
          <strong>Last Updated:</strong> October 13, 2025</p>
        `,
            },
            {
                id: "agreement",
                heading: "1. Agreement to Terms",
                content: `By accessing and using https://ahtsham.me/ ("Website"), 
        you agree to be bound by these Terms and Conditions. If you do not agree, 
        please do not use our Website.`,
            },
            {
                id: "Use-of-the-Site",
                heading: "2. Use of the Site",
                content: `You agree to use the Site only for lawful purposes and in accordance with all applicable laws and regulations.
                You must not:
                <ul class="list-disc pl-6 text-gray-400">
            <li>Interfere with or disrupt the Site or its servers</li>
            <li>Upload malicious code or spam</li>
            <li>Copy or distribute materials from the Site without permission</li>
            </ul>`,
            },
            {
                id: "intellectual",
                heading: "3. Intellectual Property",
                content: `All content on this Site — including text, graphics, logos, icons, and code — is the property of Ahtsham Web Mentor (AWM) or its licensors and is protected under copyright and trademark laws. You may not reproduce, republish, or redistribute material from the Site without written consent.`,
            },
            {
                id: "Third-Party-Links",
                heading: "4. Third-Party Links",
                content: `Our Site may contain links to other websites.
                We are not responsible for the content, policies, or practices of any third-party sites and do not endorse them.`,
            },
            {
                id: "Disclaimer-of-Warranties",
                heading: "5. Disclaimer of Warranties",
                content: `The Site is provided on an “AS IS” and “AS AVAILABLE” basis.
                We make no warranties, express or implied, about its reliability, accuracy, or availability.`,
            },
            {
                id: "Limitation-of-Liability",
                heading: "6. Limitation of Liability",
                content: `In no event shall Ahtsham Web Mentor (AWM) or its affiliates be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Site.
                Our total liability shall not exceed any amount you have paid (if any) to use the Site.`,
            },
            {
                id: "Termination",
                heading: "7. Termination",
                content: `We reserve the right to suspend or terminate your access to the Site at any time, without notice, for any reason, including violation of these Terms.`,
            },
            {
                id: "governing-law",
                heading: "8. Governing Law",
                content: `These Terms are governed by the laws of Pakistan, without regard to its conflict of law principles.
                International users agree that disputes may be handled under Pakistani jurisdiction, unless otherwise required by local law.`,
            },
            {
                id: "Changes-to-Terms",
                heading: "9. Changes to Terms",
                content: `We may update these Terms from time to time.
                Your continued use of the Site constitutes acceptance of any revised Terms.`,
            },
            {
                id: "Contact-Us",
                heading: "10. Contact Us",
                content: `For questions about these Terms, contact:
                📍 Gulberg II, Lahore, Pakistan<br/>
          📧 <a href="mailto:info@ahtsham.me" class="text-purple-400 hover:text-purple-300 underline">info@ahtsham.me</a><br/>`,
            },
        ],
    },

    "disclaimer": {
        title: "Disclaimer",
        description: "Important disclaimer information about using Ahtsham Web Mentor services.",
        image: "https://ahtsham.me/default-og.jpg",
        sections: [
            {
                id: "effective-date",
                heading: "Effective Date & Last Updated",
                content: `
          <p><strong>Effective Date:</strong> October 13, 2025<br/>
          <strong>Last Updated:</strong> October 13, 2025</p>
          </br> The information provided on https://ahtsham.me
 (the “Site”) is for general informational and educational purposes only.
All content is provided in good faith; however, Ahtsham Web Mentor (AWM) makes no warranty regarding the accuracy, adequacy, reliability, or completeness of any information.
        `,
            },
            {
                id: "No-Professional-Advice",
                heading: "1. No Professional Advice",
                content: `All material is intended for informational purposes and does not constitute professional, legal, financial, or technical advice.
                You should seek professional consultation for any specific concerns.`,
            },
            {
                id: "External-Links-Disclaimer",
                heading: "2. External Links Disclaimer",
                content: `The Site may contain links to third-party websites or content.
                We do not endorse, guarantee, or assume responsibility for the accuracy or reliability of any third-party information.`,
            },
            {
                id: "Limitation-of-Liability",
                heading: "3. Limitation of Liability",
                content: `Under no circumstances shall Ahtsham Web Mentor (AWM), its employees, or affiliates be liable for any direct or indirect damages resulting from your use of or reliance on information provided on this Site.`,
            },
            {
                id: "Use-at-Your-Own-Risk",
                heading: "4. Use at Your Own Risk",
                content: `Your use of the Site and reliance on any information is solely at your own risk.`,
            },
            {
                id: "contact",
                heading: "5. Contact",
                content: `If you have questions about this Disclaimer, please contact us:<br/>
                📧 <a href="mailto:info@ahtsham.me" class="text-purple-400 hover:text-purple-300 underline">info@ahtsham.me</a><br/>
                📍 Gulberg II, Lahore, Pakistan<br/>
                🌐 <a href="https://ahtsham.me" target="_blank" class="text-purple-400 hover:text-purple-300 underline">https://ahtsham.me</a></p>`,
            },
        ],
    },
};
