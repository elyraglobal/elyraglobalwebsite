# Elyra Global - Digital Excellence Platform

A modern, high-performance landing page and portfolio platform for Elyra Global — a digital agency specializing in precision engineering for enterprise solutions.

## 🎯 Features

✨ **Modern Design System**
- Material Design 3 color palette with 48+ semantic tokens
- Dark/Light mode with localStorage persistence
- Glassmorphism effects and smooth animations
- Responsive design (mobile, tablet, desktop)

⚡ **Performance**
- Pure HTML/CSS/JavaScript (no build step required)
- Tailwind CSS with custom configuration
- Optimized animations and transitions
- Fast load times, zero dependencies

🎨 **Interactive Elements**
- Mouse-tracking spotlight/glow effect
- Animated grid background and dot matrix
- Smooth scroll behavior and section transitions
- Theme toggle with persistent storage

📱 **Content Sections**
- Hero section with CTA buttons
- 6 service cards (Web Design, UI/UX, Hosting, SEO, Social Media, Lead Gen)
- 3-step growth process
- 3 case study cards with modals
- Contact modal with social platforms (LinkedIn, WhatsApp, Instagram, Gmail)
- Detailed case study modals with results

## 📁 Project Structure

```
websitebuilding/
├── index.html                 # Main landing page
├── README.md                  # This file
├── .gitignore                 # Git ignore rules
│
├── css/                       # Stylesheets
│   ├── variables.css          # Color tokens & spacing (Material Design 3)
│   ├── components.css         # Reusable component styles
│   ├── sections.css           # Section-specific styling
│   └── animations.css         # Keyframe animations
│
├── js/                        # JavaScript modules
│   ├── theme.js               # Dark/light mode toggle logic
│   └── spotlight.js           # Mouse-tracking spotlight effect
│
├── assets/                    # Static assets
│   └── brand/                 # Brand assets (logos, images)
│
├── projects/                  # Case studies (portfolio items)
│   └── project-1/
│       ├── index.html         # Project case study template
│       └── styles.css         # Project-specific styles
│
└── docs/                      # Documentation
    └── STRUCTURE.md           # Detailed architecture guide
```

## 🚀 Quick Start

### Local Development

**Option 1: Using Python (Recommended)**
```bash
cd websitebuilding
python -m http.server 8000
# Open: http://localhost:8000
```

**Option 2: Using Node.js**
```bash
cd websitebuilding
npx http-server
```

**Option 3: VSCode Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### 2. Start Dev Server
```bash
python -m http.server 3000
```

### 3. Open in Browser
```
http://localhost:3000/index-new.html
```

---

## 📋 Workflow: Local Testing Before Push

### ⚠️ IMPORTANT RULE: ALWAYS TEST LOCALLY FIRST

**Never push directly to GitHub without testing on localhost!**

### Workflow:
1. **Make changes** to HTML/CSS/JS files
2. **Test on localhost** (http://localhost:8000)
   - Verify the change looks correct
   - Test on mobile (use DevTools)
   - Test both dark & light themes
   - Check all affected sections
3. **Ask before pushing** — Get confirmation that changes are good
4. **git add → git commit → git push** — Only after approval
5. ✅ Changes go live automatically

### Example:
```bash
# 1. Edit a file (e.g., change button color in css/variables.css)
# 2. Refresh http://localhost:8000
# 3. Verify it looks good
# 4. "Ready to push?" → "Yes, looks good!"
# 5. git add . && git commit -m "Change button color" && git push
```

**Rule:** I will ALWAYS ask you before pushing to ensure you've reviewed and approved the changes.

---

## 🎨 Making Changes

### Change Brand Colors
**File:** `css/variables.css`

```css
html {
    --accent-cyan: #00d4ff;      /* Change primary color */
    --accent-violet: #6a17ad;    /* Change secondary color */
}
```

### Update Button Styling
**File:** `css/components.css`

```css
.btn-primary {
    background: linear-gradient(to right, var(--accent-cyan), var(--accent-violet));
    /* Colors automatically update everywhere */
}
```

### Modify Section Styles
**File:** `css/sections.css`

```css
.hero-background {
    background: linear-gradient(180deg, ...);
    /* Update hero section background */
}
```

### Add New Animations
**File:** `css/animations.css`

```css
@keyframes myAnimation {
    0% { /* start */ }
    100% { /* end */ }
}
```

---

## ✨ Adding Your First Project

### Step 1: Create Project Folder
```bash
mkdir projects/my-first-project
```

### Step 2: Copy Template Files
```bash
cp projects/project-1/index.html projects/my-first-project/
cp projects/project-1/styles.css projects/my-first-project/
mkdir projects/my-first-project/images
```

### Step 3: Edit Project Details
Open `projects/my-first-project/index.html`:
- Update `<title>`
- Change project name and description
- Replace "Project Category" with your category
- Update challenge, solution, and results

### Step 4: Add Images
Add your project screenshots to `projects/my-first-project/images/`

### Step 5: Add to Portfolio
In `index-new.html`, find the **Case Studies** section and add:

```html
<div class="glass-card rounded-xl overflow-hidden group">
    <div class="h-48 bg-surface-variant relative overflow-hidden">
        <img src="projects/my-first-project/images/hero.jpg" alt="Project">
    </div>
    <div class="p-6">
        <h4 class="text-xl font-bold text-on-surface mb-3">Your Project Title</h4>
        <p class="text-on-surface-variant text-sm mb-4">
            Brief description of what you built and the impact.
        </p>
        <a href="projects/my-first-project/" class="text-primary-container font-semibold">
            Read Case Study →
        </a>
    </div>
</div>
```

---

## 🔧 Common Tasks

### Task 1: Change All Button Colors
1. Open `css/variables.css`
2. Change `--accent-cyan` and `--accent-violet`
3. ✅ Done! All buttons update everywhere

### Task 2: Update Navigation Links
1. Open `index-new.html`
2. Find the `<nav>` section
3. Update `href` values or add new links
4. ✅ Done!

### Task 3: Add New Service Card
1. Open `index-new.html`
2. Find the Services section
3. Copy a card and customize
4. ✅ Done!

### Task 4: Modify Hero Section
1. Open `index-new.html`
2. Update hero content (heading, description, etc.)
3. ✅ Done!

### Task 5: Change Social Media Links
1. Open `index-new.html`
2. Find the footer social icons
3. Update `href` values
4. ✅ Done!

---

## 📋 File Reference

| File | Purpose | Edit When |
|------|---------|-----------|
| `index-new.html` | Main landing page | Add content, update sections |
| `css/variables.css` | Color & spacing tokens | Change theme/colors |
| `css/components.css` | Button, card styles | Modify component appearance |
| `css/sections.css` | Section backgrounds | Update section styling |
| `css/animations.css` | Animations & effects | Add/modify animations |
| `js/theme.js` | Dark/light mode | Modify theme logic |
| `js/spotlight.js` | Mouse spotlight | Customize spotlight effect |
| `projects/*/index.html` | Project case study | Create new projects |
| `projects/*/styles.css` | Project styles | Project-specific styling |

---

## 🎓 Best Practices

✅ **DO:**
- Keep CSS modular and organized
- Use CSS variables for consistency
- Keep JavaScript focused and readable
- Add comments for complex logic
- Use semantic HTML
- Test in both dark and light modes

❌ **DON'T:**
- Put styles inline in HTML
- Duplicate color/spacing values
- Create one massive CSS file
- Hard-code values instead of variables
- Forget to add project images

---

## 🌓 Theme System

The site uses **CSS Variables** for theming:

```css
/* Dark Mode (Default) */
html {
    --color-background: 18 20 21;
    --color-on-background: 226 226 227;
}

/* Light Mode */
html.light {
    --color-background: 247 241 250;
    --color-on-background: 28 27 31;
}
```

JavaScript automatically applies the theme based on user preference stored in `localStorage`.

---

## 📱 Responsive Design

The site is mobile-first and responsive:
- **Mobile:** Single column, full-width
- **Tablet (768px+):** Two columns, adjusted spacing
- **Desktop (1024px+):** Three columns, full layout

All Tailwind classes handle this automatically.

---

## 🎯 Next Steps

1. ✅ **Rename** `index-new.html` to `index.html` (when ready)
2. ✅ **Add** your first project to `projects/`
3. ✅ **Update** colors in `css/variables.css`
4. ✅ **Customize** content in `index.html`
5. ✅ **Deploy** to a hosting service

---

## 🆘 Troubleshooting

**Problem:** Styles not updating
- Solution: Check that CSS files are imported in correct order
- Check browser cache (hard refresh with Ctrl+Shift+R)

**Problem:** Theme toggle not working
- Solution: Ensure `js/theme.js` is loaded
- Check browser console for errors

**Problem:** Images not showing
- Solution: Verify image paths are relative to HTML file
- Use `../` to go up directories

**Problem:** Spotlight not visible
- Solution: Ensure `js/spotlight.js` is loaded
- Check that spotlight div exists in HTML

---

## 💡 Tips

- Use **CSS variables** instead of hardcoding colors
- Keep **project folders self-contained**
- Test changes in **both themes** (dark & light)
- Use **semantic HTML** for accessibility
- Keep **JavaScript modular** and focused

---

## 📞 Quick Commands

**Start dev server:**
```bash
python -m http.server 3000
```

**Create new project:**
```bash
mkdir projects/project-name
cp projects/project-1/index.html projects/project-name/
cp projects/project-1/styles.css projects/project-name/
```

**Find and replace colors:**
- Use VSCode Find & Replace (Ctrl+H)
- Search for old color, replace with new
- Test in both themes

---

## 🎉 You're Ready!

Your website is now:
- ✅ Modular and organized
- ✅ Easy to maintain and scale
- ✅ Ready for new projects
- ✅ Professional and polished

**Start adding your projects!** 🚀

For detailed structure information, see [STRUCTURE.md](STRUCTURE.md)
