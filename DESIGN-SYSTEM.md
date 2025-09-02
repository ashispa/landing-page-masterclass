# Design System - AI Project Management Masterclass Landing Page

## Typography Hierarchy

### 1. Main Section Headings (32px - text-3xl)
**Usage**: All primary section headings (h2 elements)
**Class**: `text-3xl font-normal text-white mb-6`
**Size**: 32px
**Weight**: Normal (400)
**Color**: White
**Margin**: 1.5rem bottom

**Components Updated**:
- ✅ ProgramBenefitsSection: "Why This Masterclass is a Game Changer?"
- ✅ MentorsSection: "Meet Your Mentors"
- ✅ FeaturesSection: "What You'll Learn" & "Who Should Attend"
- ✅ FutureProofSection: "Future-Proof Your Career"
- ✅ TestimonialsSection: "What Our Students Say"
- ✅ BonusSection: "Exclusive Bonuses" & "Bonus #1: AI Tools Mastery"
- ✅ FAQSection: "Frequently Asked Questions"
- ✅ FinalCTASection: "Ready to Transform Your Career?"
- ✅ CountdownSection: "Limited Time Offer"
- ✅ CTASection: "Secure Your Spot Today"
- ✅ HeroSection: "Why This Masterclass is 100% Worth Your Time?" & "What Will you Learn In This Masterclass?"
- ✅ WhoShouldAttendSection: "Who Should Attend this Masterclass?"

### 2. Sub-section Headings (24px - text-2xl)
**Usage**: Secondary headings (h3 elements)
**Class**: `text-2xl font-semibold text-white mb-4`
**Size**: 24px
**Weight**: Semibold (600)
**Color**: White
**Margin**: 1rem bottom

**Examples**:
- Mentor names in MentorsSection
- Feature titles in various sections
- Card headings

### 3. Card/Feature Headings (20px - text-xl)
**Usage**: Individual feature and card titles
**Class**: `text-xl font-normal text-white mb-3`
**Size**: 20px
**Weight**: Normal (400)
**Color**: White
**Margin**: 0.75rem bottom

### 4. Body Text (16px - text-base)
**Usage**: Main content text
**Class**: `text-base font-normal leading-relaxed`
**Size**: 16px
**Weight**: Normal (400)
**Line Height**: Relaxed

### 5. Supporting Text (16px with specific color)
**Usage**: Descriptive text, explanations
**Class**: `text-base font-normal leading-relaxed text-[rgb(175,175,175)]`
**Size**: 16px
**Weight**: Normal (400)
**Color**: rgb(175,175,175)
**Line Height**: Relaxed

### 6. Small Text (14px - text-sm)
**Usage**: Captions, metadata, fine print
**Class**: `text-sm font-normal`
**Size**: 14px
**Weight**: Normal (400)

## Design Tokens File

The design system is implemented in `src/design-system.ts` with the following structure:

```typescript
export const typography = {
  sectionHeading: {
    className: "text-3xl font-normal text-white mb-6",
    size: "32px",
    weight: "normal",
    color: "white",
    marginBottom: "1.5rem"
  },
  // ... other typography tokens
};
```

## Consistency Rules

### ✅ All Section Headings Must Be 32px
- Use `text-3xl` class consistently
- Maintain `font-normal` weight
- Use `text-white` color for dark backgrounds
- Use `text-gray-900` color for light backgrounds
- Apply `mb-6` (1.5rem) bottom margin

### ✅ Font Weight Hierarchy
- Main headings: `font-normal` (400)
- Sub-headings: `font-semibold` (600)
- Card headings: `font-normal` (400)
- Body text: `font-normal` (400)

### ✅ Color Consistency
- Dark sections: `text-white`
- Light sections: `text-gray-900`
- Supporting text: `text-[rgb(175,175,175)]`
- Muted text: `text-gray-400`

### ✅ Spacing Standards
- Section headings: `mb-6` (1.5rem)
- Sub-headings: `mb-4` (1rem)
- Card headings: `mb-3` (0.75rem)
- Body text: `leading-relaxed`

## Implementation Status

### ✅ Completed Updates
All main section headings have been standardized to 32px (`text-3xl`) across all components:

1. **ProgramBenefitsSection** - ✅ Updated
2. **MentorsSection** - ✅ Updated
3. **FeaturesSection** - ✅ Updated (both sections)
4. **FutureProofSection** - ✅ Updated
5. **TestimonialsSection** - ✅ Updated
6. **BonusSection** - ✅ Updated (both headings)
7. **FAQSection** - ✅ Updated
8. **FinalCTASection** - ✅ Updated
9. **CountdownSection** - ✅ Updated
10. **CTASection** - ✅ Updated
11. **HeroSection** - ✅ Updated (both sub-sections)
12. **WhoShouldAttendSection** - ✅ Updated

### ✅ Design System File
- Created `src/design-system.ts` with typography tokens
- Documented usage guidelines
- Provided example implementations

## Usage Guidelines

### For New Components
1. Import the design system: `import { typography } from '../design-system';`
2. Use the appropriate token: `<h2 className={typography.sectionHeading.className}>Title</h2>`

### For Existing Components
1. Ensure all h2 elements use `text-3xl font-normal`
2. Maintain consistent spacing with `mb-6`
3. Use appropriate colors based on background

### Maintenance
- Review all headings when adding new sections
- Ensure consistency with the design system tokens
- Update the design system file when adding new typography patterns

## Benefits of This Design System

1. **Consistency**: All section headings are now exactly 32px
2. **Maintainability**: Centralized typography definitions
3. **Scalability**: Easy to update across all components
4. **Developer Experience**: Clear guidelines and tokens
5. **Visual Hierarchy**: Clear distinction between heading levels
6. **Accessibility**: Consistent sizing improves readability
