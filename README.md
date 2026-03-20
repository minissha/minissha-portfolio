 Personal Portfolio — Minissha Thakur

A creative, fully responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Designed with a bold editorial aesthetic using a warm color palette, scroll-triggered animations, and a custom cursor experience.

Live Site: https://minissha-portfolio.netlify.app/

Preview
<img width="1860" height="793" alt="image" src="https://github.com/user-attachments/assets/74d38283-26cb-4f83-bb7d-51a6f5fd5ee7" />


| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, animations, responsive layout |
| JavaScript | Interactions, observers, form handling |
| Formspree | Contact form email delivery |
| Netlify | Hosting and deployment |

## 🎨 Color Palette

| Name | Hex | Usage |
|---|---|---|
| Ivory | `#F6F7EB` | About section background, light text |
| Golden Apricot | `#DB9B57` | Accents, CTAs, highlights |
| Dark Amaranth | `#832232` | Education/timeline, contact icons |
| Dusty Denim | `#6290C3` | Badges, secondary highlights |
| Dark | `#0e0e0e` | Main background |

---

## 📁 Project Structure

```
portfolio/
├── index.html       # All HTML — structure and content for 4 sections
├── style.css        # All styles — variables, layout, animations, responsive
├── script.js        # All JS — cursor, nav, reveal observer, form, tilt
└── README.md        # You are here
```

---

## 🚀 Getting Started Locally

### Prerequisites
- A code editor (VS Code recommended)
- Live Server extension for VS Code

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git

# 2. Open in VS Code
cd portfolio
code .

# 3. Right-click index.html → Open with Live Server
```

No npm, no build step, no dependencies — it just works.

---

## 📬 Contact Form Setup

The contact form uses [Formspree](https://formspree.io) for email delivery.

If you fork this project and want the form to send to your own email:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL
3. In `script.js`, find Section 7 and replace the fetch URL:

```js
const res = await fetch('https://formspree.io/f/YOUR_ID_HERE', {
```

---

## 🌍 Deployment

This site is deployed on **Netlify** via drag and drop.

To redeploy after making changes:
1. Go to [netlify.com](https://netlify.com) → your site dashboard
2. Drag your updated project folder onto the **Production deploys** drop zone
3. Live in ~10 seconds

---

## 📄 Sections Overview

### Hero
- Large typographic name with outline text effect
- Photo placeholder (replace `.hero-photo-placeholder` with an `<img>` tag)
- Animated entrance — text fades up, photo slides in from right

### About
- Bio, stats cards, skills grid
- Full education, experience, and activities timeline
- Left side animates from left, right side animates from right on every scroll pass

### Projects
- 4 project cards in an asymmetric grid
- First card spans 2 columns
- 3D tilt effect on hover
- Replace placeholder backgrounds with real project screenshots

### Contact
- Social/email links
- Working contact form connected to Formspree
- Validation, loading state, success and error feedback

---

 Customization Guide

| What to change | Where |
|---|---|
| Your name, bio, links | `index.html` |
| Profile photo | Replace `.hero-photo-placeholder` div with `<img src="photo.jpg">` in `index.html` |
| Colors | `:root` variables at top of `style.css` |
| Projects | `.project-card` blocks in `index.html` |
| Form email | Formspree endpoint URL in `script.js` Section 7 |
| Fonts | Google Fonts `<link>` in `index.html` `<head>` |

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).



