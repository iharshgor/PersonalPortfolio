import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Preload any font assets
const fontPreloadLinks = [
  { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap", rel: "stylesheet" }
];

// Add font preload links to head
fontPreloadLinks.forEach(({ href, rel }) => {
  const link = document.createElement("link");
  link.href = href;
  link.rel = rel;
  document.head.appendChild(link);
});

// Set the page title
document.title = "John Doe | Software Developer Portfolio";

// Add meta description for SEO
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Professional portfolio for John Doe, a software developer specializing in modern web applications with expertise in React, Node.js, and other cutting-edge technologies.";
document.head.appendChild(metaDescription);

// Add Open Graph tags for better social media sharing
const ogTags = [
  { property: "og:title", content: "John Doe | Software Developer Portfolio" },
  { property: "og:description", content: "Professional portfolio for John Doe, a software developer specializing in modern web applications with expertise in React, Node.js, and other cutting-edge technologies." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: window.location.href },
  { property: "og:image", content: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" }
];

ogTags.forEach(({ property, content }) => {
  const meta = document.createElement("meta");
  meta.property = property;
  meta.content = content;
  document.head.appendChild(meta);
});

createRoot(document.getElementById("root")!).render(<App />);
