# 📁 Elyra Global - Project Structure

## Directory Layout

```
websitebuilding/
├── index-new.html                 # ← Main entry point (CLEAN & MODULAR)
├── css/
│   ├── variables.css              # All CSS variables & color tokens
│   ├── components.css             # Buttons, cards, social icons
│   ├── sections.css               # Hero, services, process styles
│   └── animations.css             # Keyframes & transitions
├── js/
│   ├── theme.js                   # Theme toggle (dark/light mode)
│   └── spotlight.js               # Mouse-tracking spotlight effect
├── assets/
│   ├── images/                    # Project images
│   └── icons/                     # Custom icons/logos
├── projects/
│   ├── project-1/                 # Template for first project
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── images/
│   ├── project-2/
│   └── project-3/
├── STRUCTURE.md                   # ← You are here
└── README.md                      # Setup & usage guide
```

---

## 🎨 How to Make Changes

### Change Colors/Theme
**File:** `css/variables.css`
- All 48+ color tokens defined here
- Update dark mode variables in `html { }`
- Update light mode variables in `html.light { }`
- Colors automatically update across the entire site

**Example:**
```css
html {
    --accent-cyan: #00d4ff;     /* Primary accent color */
    --accent-violet: #6a17ad;   /* Secondary accent color */
}
```

### Change Button Styles
**File:** `css/components.css`
- `.btn-primary` - Main CTA button
- `.btn-secondary` - Ghost button
- `.social-icon` - Social media icons
- `.glass-card` - Card styling

**Example:**
```css
.btn-primary {
    background: linear-gradient(to right, var(--accent-cyan), var(--accent-violet));
    /* All color changes = one place */
}
```

### Change Section Styling
**File:** `css/sections.css`
- `.hero-background` - Hero section
- `.section-background` - Services, Process, Case Studies
- `.grid-pattern` - Background grid
- `.gradient-divider` - Dividers between sections

### Add Animations
**File:** `css/animations.css`
- All `@keyframes` definitions
- Spotlight effect styling
- Theme toggle animation

### Update JavaScript
**File:** `js/theme.js` - Theme switching logic
**File:** `js/spotlight.js` - Mouse-tracking spotlight

---

## ✨ Adding Your First Project

### Step 1: Create Project Folder
```bash
mkdir projects/ecommerce-expansion
```

### Step 2: Create Project Structure
```
projects/ecommerce-expansion/
├── index.html        # Project page
├── styles.css        # Project-specific styles
└── images/
    ├── hero.jpg
    ├── screenshot-1.jpg
    └── screenshot-2.jpg
```

### Step 3: Create Project HTML
**File:** `projects/ecommerce-expansion/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Expansion - Elyra Global</title>
    
    <!-- Link to main CSS files -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="../../css/variables.css">
    <link rel="stylesheet" href="../../css/components.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your project content here -->
    <h1>E-Commerce Expansion Project</h1>
    <!-- ... -->
</body>
</html>
```

### Step 4: Add to Portfolio
In `index-new.html`, update the **Case Studies** section:

```html
<div class="glass-card rounded-xl overflow-hidden group">
    <div class="h-48 bg-surface-variant relative overflow-hidden">
        <img src="projects/ecommerce-expansion/images/hero.jpg" alt="Project">
    </div>
    <div class="p-6">
        <h4 class="text-xl font-bold text-on-surface mb-3">E-Commerce Expansion</h4>
        <p class="text-on-surface-variant text-sm mb-4">
            Scaling a bespoke retail brand's digital infrastructure...
        </p>
        <a href="projects/ecommerce-expansion/" class="text-primary-container font-semibold">
            Read Case Study →
        </a>
    </div>
</div>
```

---

## 🔧 Maintenance Workflow

### Scenario 1: Update Brand Colors
1. Open `css/variables.css`
2. Change `--accent-cyan` or `--accent-violet` values
3. **Done!** Colors update everywhere

### Scenario 2: Modify Button Hover State
1. Open `css/components.css`
2. Update `.btn-primary:hover` styles
3. **Done!** All buttons update

### Scenario 3: Add New Component
1. Create new CSS file in `css/` folder
2. Import it in `index-new.html` `<head>`
3. Use in HTML

### Scenario 4: Add New Section
1. Add HTML to `index-new.html`
2. Create corresponding CSS in `css/sections.css`
3. Keep styling modular and reusable

---

## 📝 File Purposes

| File | Purpose | When to Edit |
|------|---------|--------------|
| `css/variables.css` | All colors & spacing | Change theme/colors globally |
| `css/components.css` | Buttons, cards, icons | Update component styles |
| `css/sections.css` | Section backgrounds | Modify section styling |
| `css/animations.css` | Animations & effects | Add/update animations |
| `js/theme.js` | Dark/light mode | Modify theme logic |
| `js/spotlight.js` | Mouse spotlight effect | Customize spotlight |
| `index-new.html` | Main page structure | Add content/sections |

---

## 🚀 Best Practices

✅ **DO:**
- Keep styles organized by concern (components, sections, animations)
- Use CSS variables for consistency
- Keep JavaScript modular and focused
- Add comments for complex styling
- Use meaningful class names

❌ **DON'T:**
- Put styles directly in HTML
- Duplicate color/spacing values
- Create monolithic CSS files
- Hard-code values instead of using variables

---

## 📞 Quick Reference

**Change accent colors:**
```css
/* css/variables.css */
--accent-cyan: #00d4ff;
--accent-violet: #6a17ad;
```

**Modify button style:**
```css
/* css/components.css */
.btn-primary {
    /* your changes */
}
```

**Add new project:**
```bash
mkdir projects/project-name
# Create index.html, styles.css, images/
```

---

**Ready to scale?** Start with adding your first project to `projects/` folder!
