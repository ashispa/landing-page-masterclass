# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start`
- **Build for production**: `npm run build`
- **Run tests**: `npm test`
- **Eject from Create React App**: `npm run eject` (irreversible)

## Architecture Overview

This is a React 18 + TypeScript landing page for an AI Project Management Masterclass built with Tailwind CSS. The project follows a component-based architecture with a single-page application structure and comprehensive mobile-first responsive design system.

### Key Architectural Decisions

**Main Component Structure**: The `HeroSection.tsx` component contains multiple sections (hero, features, learning outcomes) rather than separate components. This was chosen for easier state management of the functional countdown timer and consistent styling across related sections.

**Layout Containers**: Two main container widths are used consistently:
- `max-w-7xl`: Navigation and hero content
- `max-w-5xl`: Features and learning sections (more compact)

**Styling System**: 
- Custom Tailwind configuration extends colors (primary, dark), fonts (Inter Display/Inter), and animations
- Custom CSS animations defined in `src/index.css` including `animate-tilt` for feature icons
- Noise pattern overlays generated via SVG `feTurbulence` filters for visual texture
- **Comprehensive Mobile Design System**: Complete typography hierarchy with dedicated CSS classes

### Component Organization

- **HeroSection.tsx**: Primary component containing hero, **Wistia video embed**, benefits, features grid, learning outcomes sections, and enhanced sticky bottom bar with smart scroll behavior. **Mobile optimized** with attention bar text changes, navigation restructuring, and mobile font hierarchy. Features real Techademy logo (187x22px) and authentic profile images for customer avatars.
- **WhoShouldAttendSection.tsx**: **Mobile responsive** with single-column to 2x2 grid layout, increased height for role visibility, and proper contrast handling (dark text for light backgrounds).
- **ProgramBenefitsSection.tsx**: **Mobile optimized** with reduced font hierarchy and responsive image containers to prevent overflow.
- **MentorsSection.tsx**: **Mobile layout** with progress bar repositioned to left, reduced image sizes, and complete font hierarchy implementation.
- **TestimonialsSection.tsx**: Continuous carousel with restored original font sizing (larger than design system) using authentic profile images (Profile 1-6)
- **BonusSection.tsx**: Purple background section (#8756f8) with transparent bonus cards, mobile font hierarchy, and CTA text "Register for Free Masterclass"
- **FAQSection.tsx**: White background section with mobile font hierarchy and smooth accordion animations
- **FinalCTASection.tsx**: Black background section with mobile font hierarchy and **mobile-only countdown timer** positioned below CTA button
- **RegistrationModal.tsx**: Enhanced form with **mobile-optimized country code dropdown** using full-width positioning, real-time validation, email suggestions, and responsive design
- **App.tsx**: Layout wrapper importing all section components with disclaimer footer
- Design system components use standardized typography classes for consistency

### State Management

- **Dual countdown timers**: HeroSection sticky bar countdown (mobile removed) and FinalCTASection mobile-only countdown using React hooks with 1-second intervals
- Target date calculated dynamically from current time + offset
- Sticky bar state management includes scroll tracking, progress calculation, and time-based messaging
- Smart scroll behavior with direction detection for enhanced UX
- **Registration modal state**: Form validation, country dropdown positioning with mobile-specific logic, email suggestions
- No external state management library used

### Styling Patterns

**Typography**: 
- Desktop: Consistent use of `font-normal` for headings (softer appearance), `leading-snug` for compact text, and Inter Display for primary font
- **Mobile Design System**: Standardized typography hierarchy with Inter font family
  - Hero headings: 22px, 600 weight (`mobile-hero-heading`)
  - Section headings: 20px, 600 weight (`mobile-section-heading`) 
  - Card titles: 16px, 500 weight (`mobile-card-title`)
  - Body text: 13px, 400 weight (`mobile-card-text`)
  - Light backgrounds: Use `mobile-section-heading-dark` for proper contrast

**Colors**: Orange (`orange-500`) for accents, green (`green-400`) for success indicators, amber (`amber-800`) for feature icons, with carefully coordinated gradient combinations

**Animations**: Subtle tilting animations on feature icons, functional real-time countdown, noise pattern overlays for visual depth, slide-up animations for sticky bar, and smooth accordion transitions

**Responsive Image Standards**: 
- Mobile images reduced proportionally (typically 40-60% of desktop size)
- Pattern: `w-48 md:w-80`, `h-32 md:h-60` for instructor images
- Profile images: `w-12 h-12 md:w-20 md:h-20`

### Enhanced Features

**Sticky Bottom Bar**: Advanced implementation with:
- Smart scroll behavior (hides on first fold, shows/hides based on scroll direction)
- Dynamic time-based messaging system
- Scroll progress indicator with reduced prominence
- 1200px container width with proper element spacing
- Slide-up animation with hover effects

**Design System**: Standardized typography classes in `index.css`:
- Desktop classes: `.testimonial-heading`, `.testimonial-content`, `.author-name`, `.author-location`, `.section-badge`, `.bonus-card-title`, `.cta-button`
- **Mobile classes**: `.mobile-hero-heading`, `.mobile-hero-subheading`, `.mobile-section-heading`, `.mobile-card-title`, `.mobile-card-text`, `.mobile-section-heading-dark`
- TestimonialsSection uses original larger fonts directly, not design system classes
- **Implementation Pattern**: Use responsive `block md:hidden` / `hidden md:block` pattern for mobile/desktop text variants

**Background Treatments**:
- Consistent film grain noise patterns across all black sections
- Purple section (#8756f8) with overlay and pattern for bonus content
- White background for FAQ section with clean styling
- Transparent card designs with subtle borders

### Mobile-First Development Standards

**Typography Implementation**:
```tsx
{/* Mobile Text */}
<span className="block md:hidden mobile-section-heading">
  Mobile optimized heading
</span>
{/* Desktop Text */}
<span className="hidden md:block text-3xl font-normal">
  Desktop optimized heading
</span>
```

**Layout Patterns**:
- Mobile: Single column layouts with left-aligned progress bars
- Desktop: Multi-column grids with centered progress elements
- Responsive spacing: `mb-3 md:mb-6`, `py-12 md:py-16`

**Image Optimization**:
- Always provide responsive sizing for images
- Use container constraints: `max-w-xs` for mobile containment
- Maintain aspect ratios with proportional reductions

### Development Notes

- TypeScript interfaces defined for countdown state (`TimeLeft`) and custom Wistia player element
- **Wistia Integration**: Scripts loaded in `public/index.html` with media ID `s60j54hnw6`, TypeScript declarations for custom elements
- **Brand Asset Integration**: Real Techademy logo and Profile 1-8 images copied from `brand_assets/` to `public/` folder
- **Mobile-First Responsive Design**: Comprehensive mobile optimization with dedicated design system
- All animations and interactions are CSS-based with no JavaScript libraries
- **Enhanced Form UX**: Real-time validation, pulse effects, email suggestions, mobile-optimized dropdown positioning
- Disclaimer section with Techademy copyright at bottom
- No footer component - integrated into disclaimer section
- **Mobile Responsive Components**: All major components optimized with mobile font hierarchy and layout adjustments

### Future Development Guidelines

**When adding new components or sections:**
1. **Always implement mobile-first**: Design for mobile, enhance for desktop
2. **Use established typography classes**: Prefer `mobile-section-heading` over inline styles
3. **Follow responsive patterns**: Use consistent `block md:hidden` / `hidden md:block` implementation
4. **Apply Inter font family**: Use "Inter", "Inter Placeholder", sans-serif for all mobile text
5. **Consider background context**: Use `mobile-section-heading-dark` for light backgrounds
6. **Optimize images responsively**: Always provide mobile-appropriate sizing
7. **Maintain spacing standards**: Follow established padding/margin patterns

**Design System Priority Order:**
1. Mobile design system classes (for mobile)
2. Desktop utility classes (for desktop)  
3. Custom inline styles (only when necessary)

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.