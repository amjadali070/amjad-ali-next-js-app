# Refactoring & Redesign Deliverables

## Changelog
- **Architecture**: Moved generic data (projects, skills) to `src/lib/data.tsx` for better maintainability.
- **Styling**: 
  - Updated `tailwind.config.ts` with a new "Coding Vibes" color palette (Dark coding theme).
  - Added new fonts: Inter (UI) and JetBrains Mono (Code).
  - Created global glassmorphism and glow utilities in `globals.css`.
- **Components**:
  - `Hero3D`: Added a React Three Fiber scene with a rotating wireframe sphere and stars.
  - `Header`: New sticky glass-effect header with terminal-style branding.
  - `ProjectsGrid`: Clean, grid-based layout with hover effects and "code" aesthetic.
  - `SkillsPanel`: "Technical Arsenal" section with categorized skills. 
  - `ContactConsole`: Interactive terminal-style contact form.
  - `AboutSection`: Integrated "developer.json" visual for developer-first vibe.
- **Performance**:
  - Implemented dynamic import for 3D components (`ssr: false`) to avoid server-side rendering issues.
  - Used next/image for optimized asset loading.

## Design Decisions
- **Premium Dark Mode**: We moved away from standard slate/gray to a deep blue/black (`#0B0F15`) background that feels like a premium IDE.
- **3D Integration**: kept it subtle (Hero section) to add depth without overwhelming the reading experience.
- **Developer First**: Used "code snippets" and "terminal" metaphors (e.g., `git checkout cv`, `contact-shell`) to align with the target audience (recruiters looking for engineers).

## QA Checklist
- [ ] **Mobile Responsiveness**: Verify the Header menu and Grid layouts on mobile devices.
- [ ] **3D Performance**: Check if the Hero sphere loads smoothly on low-power devices (Dynamic Import should handle this gracefull, falling back to loading state).
- [ ] **Forms**: Test the `mailto` functionality in the Contact Console.
- [ ] **Links**: Verify all GitHub and Link buttons open correctly in new tabs.

## Next Steps
- **Delete Old Components**: Once verified, you can safely remove the old components in `src/app/components/` that are no longer used (e.g., `NavBar.tsx`, `Services.tsx`, etc.).
- **Expand 3D**: Add more interactive elements to `SkillsPanel` (e.g. a floating icon cloud) as discussed.
