# AI PM Masterclass Landing Page - Reproduction Prompt

## Project Overview
This is a React 18 + TypeScript landing page for an AI Project Management Masterclass built with Tailwind CSS. The project implements a comprehensive mobile-first design system with brand asset integration and Wistia video embedding.

## Quick Start Commands
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## Core Architecture

### Component Structure
```
src/components/
├── HeroSection.tsx           # Hero content, Wistia video, features, sticky bar
├── WhoShouldAttendSection.tsx    # Target audience with responsive layout
├── ProgramBenefitsSection.tsx    # Benefits with animated progress bars
├── MentorsSection.tsx           # Instructor profiles with progress timeline
├── FutureProofSection.tsx       # Career advancement section
├── TestimonialsSection.tsx      # Infinite carousel with real profiles
├── BonusSection.tsx            # Purple section with bonus offerings
├── FAQSection.tsx              # White background accordion FAQ
├── FinalCTASection.tsx         # Final CTA with mobile countdown
└── RegistrationModal.tsx       # Enhanced form with mobile dropdown
```

### Key Technical Features

#### 1. Comprehensive Mobile Design System
**Location:** `src/index.css`

Mobile typography classes with Inter font family:
```css
.mobile-hero-heading { font-size: 22px; font-weight: 600; }
.mobile-section-heading { font-size: 20px; font-weight: 600; }
.mobile-card-title { font-size: 16px; font-weight: 500; }
.mobile-card-text { font-size: 13px; font-weight: 400; }
.mobile-section-heading-dark { color: #1f2937; } /* For white backgrounds */
```

**Responsive Implementation Pattern:**
```tsx
<h2>
  <span className="block md:hidden mobile-section-heading">Mobile Text</span>
  <span className="hidden md:block text-3xl font-normal">Desktop Text</span>
</h2>
```

#### 2. Wistia Video Integration
**Location:** `public/index.html` + `src/components/HeroSection.tsx`

**HTML Head Scripts:**
```html
<script src="https://fast.wistia.com/player.js" async></script>
<script src="https://fast.wistia.com/embed/s60j54hnw6.js" async type="module"></script>
<style>wistia-player[media-id='s60j54hnw6']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/s60j54hnw6/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style>
```

**TypeScript Declaration:**
```typescript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': {
        'media-id': string;
        seo?: string;
        aspect?: string;
        className?: string;
      };
    }
  }
}
```

**Component Usage:**
```tsx
<wistia-player 
  media-id="s60j54hnw6" 
  seo="false" 
  aspect="1.7777777777777777"
  className="w-full h-full rounded-lg"
></wistia-player>
```

#### 3. Brand Asset Integration
**Assets Location:** `public/` folder

**Logo Implementation (187x22px):**
```tsx
<img 
  src="/techademy-logo.png" 
  alt="Techademy Logo" 
  className="w-[187px] h-[22px]"
/>
```

**Profile Images:** Profile 1-8 images used in navigation avatars and testimonials

#### 4. Enhanced Registration Modal
**Key Features:**
- Real-time form validation with visual feedback
- Mobile-optimized country code dropdown with full-width positioning
- Email domain suggestions
- Pulse animations on successful field completion

**Mobile Dropdown Algorithm:**
```typescript
if (isMobile) {
  left = 16; // 16px margin from edge
  const mobileDropdownWidth = viewportWidth - 32;
  top = rect.bottom + 8;
  
  if (top + dropdownHeight > viewportWidth - 20) {
    top = rect.top - dropdownHeight - 8;
  }
}
```

#### 5. Dual Countdown Timer System
- **Desktop:** Sticky bar countdown (mobile hidden)
- **Mobile:** FinalCTASection countdown below CTA button
- Both use identical time calculation logic

#### 6. Advanced Sticky Bottom Bar
**Features:**
- Smart scroll detection (hides/shows based on direction)
- Progress indicator showing scroll percentage
- Dynamic time-based messaging
- Mobile-optimized with "Register for Free Masterclass" text

## Mobile-First Development Standards

### Typography Hierarchy
1. Hero heading: 22px, 600 weight
2. Section headings: 20px, 600 weight  
3. Card titles: 16px, 500 weight
4. Body text: 13px, 400 weight
5. Subheadings: 14px, 300 weight

### Responsive Image Standards
```tsx
{/* Pattern: Mobile reduced, desktop full */}
<div className="w-48 md:w-80 h-32 md:h-60">
  <img src="/profile-1.png" alt="Profile" />
</div>
```

### Color System Context
- **Dark Backgrounds:** Use `mobile-section-heading` (white text)
- **Light Backgrounds:** Use `mobile-section-heading-dark` (gray-800 text)

## Component-Specific Implementation Details

### HeroSection.tsx
- **Mobile Attention Bar:** "Pass PMP Exam in First Attempt"
- **4-Line Mobile Heading:** Distributed across multiple spans with orange accents
- **Real Techademy Logo:** 187x22px with proper responsive sizing
- **Customer Avatars:** Profile 1-4 images replacing gradient placeholders
- **Wistia Video:** Integrated with grey border, no gradient decoration

### RegistrationModal.tsx
- **Mobile Dropdown:** Full-width (viewport - 32px) for better touch interaction
- **Validation System:** Real-time with green/red indicators and pulse effects
- **Email Intelligence:** Auto-suggest common domains
- **Form UX:** Hover tooltips for errors, success animations

### FinalCTASection.tsx
- **Mobile Countdown:** Only visible on mobile, positioned below CTA
- **Mobile Font Hierarchy:** Applied to main heading and subtitle
- **Countdown Styling:** Grey background with orange accent colors

### TestimonialsSection.tsx
- **Infinite Carousel:** 30ms interval auto-scroll with seamless looping
- **Real Profile Images:** Profile 1-6 images for authentic testimonials
- **Animation Logic:** Triple array with modulo operation

### BonusSection.tsx
- **Purple Background:** #8756f8 with film grain overlay
- **Mobile Typography:** Complete font hierarchy implementation
- **CTA Text Update:** "Register for Free Masterclass"

## State Management Architecture

### Countdown Timer State
```typescript
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const [timeLeft, setTimeLeft] = useState<TimeLeft>({ 
  days: 0, hours: 0, minutes: 0, seconds: 0 
});
```

### Sticky Bar State Management
```typescript
const [showStickyBar, setShowStickyBar] = useState(false);
const [scrollProgress, setScrollProgress] = useState(0);
const [urgencyMessage, setUrgencyMessage] = useState("");
```

### Registration Modal State
```typescript
const [formData, setFormData] = useState({
  firstName: '', lastName: '', email: '', phone: '', countryCode: '+1'
});
const [errors, setErrors] = useState({...});
const [validFields, setValidFields] = useState({...});
const [dropdownPosition, setDropdownPosition] = useState({ 
  top: 0, left: 0, width: 256 
});
```

## Performance & Quality Features

### CSS-Based Animations
- Hardware-accelerated transforms
- Smooth transitions with proper easing
- Efficient interval management with cleanup

### Form Enhancement Features
1. Real-time validation feedback
2. Visual success indicators with pulse effects
3. Error tooltips with proper positioning
4. Email domain auto-suggestions
5. Mobile-optimized touch interactions

### Responsive Design Standards
- Mobile-first approach with desktop enhancements
- Consistent breakpoint usage (md:, lg:)
- Proper image optimization for mobile viewports
- Touch-friendly target sizes

## Future Development Guidelines

### When Adding New Components:
1. **Mobile-First:** Design mobile layout first, enhance for desktop
2. **Typography System:** Use established `mobile-*` classes
3. **Responsive Pattern:** Follow `block md:hidden` / `hidden md:block` pattern
4. **Inter Font:** Apply "Inter", "Inter Placeholder", sans-serif
5. **Context Colors:** Use appropriate class for background type
6. **Image Optimization:** Always provide mobile-appropriate sizing

### Code Quality Standards:
- TypeScript strict typing for all components
- Proper cleanup of intervals and event listeners
- Consistent naming conventions and file structure
- ESLint compliance and code formatting
- Comprehensive error handling and fallback states

## Testing & Browser Support
- Modern browser support with CSS Grid and Flexbox
- 60fps animations on supported devices
- Mobile-first responsive design testing
- Accessibility compliance with proper ARIA labels
- Touch interaction optimization for mobile devices

---

**Production Ready Features:**
✅ All 8 major components fully mobile-optimized  
✅ Brand asset integration complete  
✅ Wistia video integration functional  
✅ Enhanced form UX with validation  
✅ Mobile-specific dropdown positioning  
✅ Dual countdown timer system  
✅ Comprehensive design system implementation  

**Build Status:** ✅ Compiling successfully with TypeScript support  
**Ready for:** Production deployment, A/B testing, analytics integration