interface QuestionItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  [key: string]: QuestionItem[];
}
export const faqItems: FaqCategory = {
  General: [
    {
      question: "What is the first process to use this app?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet interdum ipsum. Pellentesque condimentum et leo id vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et magna ut magna aliquam faucibus. In sit amet efficitur nisi, et mattis massa.",
    },
    {
      question: "How to reset my password?",
      answer:
        "To reset your password, go to the settings page, click on 'Reset Password' and follow the instructions.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team via the contact form on the app or by emailing support@example.com.",
    },
    {
      question: "Is there a mobile version of the app?",
      answer:
        "Yes, the app is available for both iOS and Android devices. Download it from the App Store or Google Play.",
    },
    {
      question: "Can I customize my profile?",
      answer:
        "Yes, go to the profile settings to update your profile picture, username, and other details.",
    },
  ],
  CreditCard: [
    {
      question: "What are the terms and conditions?",
      answer:
        "You can view the terms and conditions on our Terms of Service page. Please read them carefully.",
    },
    {
      question: "How is my data protected?",
      answer:
        "We employ industry-standard security measures to protect your data. Please refer to our Privacy Policy for details.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Refunds are processed within 7-10 business days for eligible transactions. See our Refund Policy for more information.",
    },
    {
      question: "Can I transfer my account to someone else?",
      answer: "No, accounts are non-transferable as per our terms of service.",
    },
    {
      question: "Are there restrictions on app usage?",
      answer:
        "Yes, users must adhere to our Acceptable Use Policy to ensure a safe environment for all members.",
    },
  ],
  HomeLoan: [
    {
      question: "Which locations are supported?",
      answer:
        "Our service is currently available in multiple countries. Check the supported regions on our location page.",
    },
    {
      question: "Can I use the app while traveling?",
      answer:
        "Yes, the app is accessible internationally. However, some features may vary by region.",
    },
    {
      question: "How do I change my location settings?",
      answer:
        "Go to the settings page and update your location preferences as needed.",
    },
    {
      question: "Will my data be accessible if I move?",
      answer:
        "Yes, your data is stored in the cloud, so you can access it from anywhere with an internet connection.",
    },
    {
      question: "Are there any location-specific restrictions?",
      answer:
        "Some services may not be available in certain regions due to regulatory limitations. Contact support for more details.",
    },
  ],
  DebtConsolidation: [
    {
      question: "Are there any financial incentives for using the app?",
      answer:
        "Yes, we offer various incentives based on usage. Check our Financial Incentives page for more information.",
    },
    {
      question: "How can I earn rewards?",
      answer:
        "You can earn rewards by completing tasks, referring friends, or participating in promotions. See the Rewards section for details.",
    },
    {
      question: "Is there a referral program?",
      answer:
        "Yes! Invite friends using your unique code, and you’ll both receive rewards upon successful sign-up.",
    },
    {
      question: "Are there discounts for premium members?",
      answer:
        "Yes, premium members get access to exclusive discounts. Visit the Membership page for more details.",
    },
    {
      question: "Can I exchange rewards for cash?",
      answer:
        "Currently, rewards can only be used within the app and cannot be exchanged for cash.",
    },
  ],
};
