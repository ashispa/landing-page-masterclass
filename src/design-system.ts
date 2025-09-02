// Design System - Typography Tokens
// This file defines consistent typography scales for the AI Project Management Masterclass landing page

export const typography = {
  // Main Section Headings - All should be 32px (text-3xl)
  sectionHeading: {
    className: "text-3xl font-normal text-white mb-6",
    size: "32px",
    weight: "normal",
    color: "white",
    marginBottom: "1.5rem"
  },
  
  // Sub-section Headings - 24px (text-2xl)
  subHeading: {
    className: "text-2xl font-semibold text-white mb-4",
    size: "24px",
    weight: "semibold",
    color: "white",
    marginBottom: "1rem"
  },
  
  // Card/Feature Headings - 20px (text-xl)
  cardHeading: {
    className: "text-xl font-normal text-white mb-3",
    size: "20px",
    weight: "normal",
    color: "white",
    marginBottom: "0.75rem"
  },
  
  // Body Text - 16px (text-base)
  bodyText: {
    className: "text-base font-normal leading-relaxed",
    size: "16px",
    weight: "normal",
    lineHeight: "relaxed"
  },
  
  // Supporting Text - 16px with specific color
  supportingText: {
    className: "text-base font-normal leading-relaxed text-[rgb(175,175,175)]",
    size: "16px",
    weight: "normal",
    color: "rgb(175,175,175)",
    lineHeight: "relaxed"
  },
  
  // Small Text - 14px (text-sm)
  smallText: {
    className: "text-sm font-normal",
    size: "14px",
    weight: "normal"
  }
};

// Usage Guidelines:
// 1. All main section headings (h2) should use: typography.sectionHeading.className
// 2. All sub-section headings (h3) should use: typography.subHeading.className
// 3. All card/feature headings should use: typography.cardHeading.className
// 4. All body text should use: typography.bodyText.className
// 5. All supporting text should use: typography.supportingText.className

// Example usage:
// <h2 className={typography.sectionHeading.className}>Section Title</h2>
// <h3 className={typography.subHeading.className}>Sub Section</h3>
// <p className={typography.supportingText.className}>Supporting text content</p>
