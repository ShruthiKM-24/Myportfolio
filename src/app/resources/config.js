// =======================================
// 🎮 CYBER STORM - BLUE ESPORTS THEME
// =======================================

const baseURL = "demo.magic-portfolio.com";

// =======================================
// ROUTES
// =======================================
const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
  "/contact": true,
  "/project": true,
};

// =======================================
// PASSWORD PROTECTION
// =======================================
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

// =======================================
// STYLE (Elite Tournament Look)
// =======================================
const style = {
  theme: "dark",                // dark | light
  neutral: "slate",             // sand | gray | slate
  brand: "indigo",              // High-tech indigo
  accent: "white",              // Clean white highlights
  solid: "contrast",            // Strong readable UI
  solidStyle: "flat",           // Clean modern UI
  border: "rounded",            // Smooth modern panels
  surface: "translucent",       // Glass effect
  transition: "micro",          // Quick animations
};

// =======================================
// EFFECTS (Arena Glow)
// =======================================
const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 85,                 // Controlled neon glow
  },

  gradient: {
    display: true,
    x: 60,
    y: 5,
    width: 130,
    height: 130,
    tilt: -20,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },

  dots: {
    display: true,              // Enable digital matrix dots
    size: 2,
    color: "brand-on-background-weak",
    opacity: 25,
  },

  lines: {
    display: true,
    color: "neutral-alpha-weak",
    opacity: 20,
  },

  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

// =======================================
// TOP BAR DISPLAY
// =======================================
const display = {
  location: true,
  time: true,
};

// =======================================
// MAILCHIMP SECTION
// =======================================
const mailchimp = {
  action: "https://url/subscribe/post?parameters",

  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 110,
    },

    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 120,
      height: 120,
      tilt: -30,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },

    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },

    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },

    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 35,
    },
  },
};

export {
  routes,
  protectedRoutes,
  effects,
  style,
  display,
  mailchimp,
  baseURL,
};
