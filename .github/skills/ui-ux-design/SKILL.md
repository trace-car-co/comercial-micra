---
name: ui-ux-design
description: "UI/UX design skill for modern web projects. Use when: improving visual design, adding animations, upgrading user experience, making components more interactive, applying modern design patterns like glassmorphism, spotlight cards, magnetic buttons, animated gradients, blur text reveals, count-up animations, scroll-triggered effects. DO NOT USE FOR: backend logic, API integration, database operations."
---

# UI/UX Design Skill

## Design Philosophy

Create modern, corporate-yet-innovative web experiences that balance professionalism with creative flair. The goal is to communicate that the company is a forward-thinking software firm with out-of-the-box ideas while maintaining corporate trust and credibility.

## Available ReactBits Components

Located in `src/components/reactbits/`:

### CountUp
Animated number counter with spring physics. Use for statistics, KPIs, metrics.
```jsx
import CountUp from './reactbits/CountUp'
<CountUp from={0} to={200} duration={2.5} separator="," className="text-2xl font-bold" />
```

### BlurText
Blur-in text animation on scroll. Use for subtitles, descriptions, secondary text.
```jsx
import BlurText from './reactbits/BlurText'
<BlurText text="Your text here" delay={30} animateBy="words" direction="top" className="text-lg" />
```

### GradientText
Animated gradient text with configurable colors and speed. Use for accent headings.
```jsx
import GradientText from './reactbits/GradientText'
<GradientText colors={['#2059A5', '#3B7DD8', '#34A853', '#143570']} animationSpeed={6}>
  Highlighted text
</GradientText>
```

### SpotlightCard
Hover-following spotlight effect for cards. Use for service cards, testimonials, feature cards.
```jsx
import SpotlightCard from './reactbits/SpotlightCard'
<SpotlightCard spotlightColor="rgba(32, 89, 165, 0.12)" className="rounded-2xl p-7 border">
  Card content
</SpotlightCard>
```

### Magnet
Magnetic cursor-following effect for interactive elements. Use for CTAs, buttons.
```jsx
import Magnet from './reactbits/Magnet'
<Magnet padding={60} magnetStrength={3}>
  <button>Click me</button>
</Magnet>
```

## Design Tokens (MICRA Brand)

```
Primary: #2059A5 (corporate blue)
Primary Dark: #143570
Primary Light: #3B7DD8
Accent: #34A853 (green, trust)
Dark: #0D0D0F
Off-white: #F8F9FC
Muted text: #6B7280
```

## Animation Guidelines

1. **Scroll-triggered**: Use `whileInView` with `viewport={{ once: true }}`
2. **Stagger children**: Delay each child by 0.08-0.12s
3. **Hover lift**: `whileHover={{ y: -4, scale: 1.02 }}`
4. **Spring physics**: For counters and interactive elements
5. **Blur reveals**: For text that should feel premium
6. **Gradient text**: For key accent phrases in section headings
7. **Spotlight cards**: For any card grid
8. **Magnetic buttons**: For primary CTAs only (not all buttons)

## Patterns to Follow

- Section badge → animated gradient heading → blur text subtitle → content grid
- Cards should have SpotlightCard + hover lift + border glow
- Primary CTAs should have Magnet + shadow + hover scale
- Stats should use CountUp with staggered delays
- Keep animations subtle and performant (will-change, transform-only)
