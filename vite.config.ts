import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ============================================================
// GITHUB PAGES BASE PATH CONFIGURATION
// ------------------------------------------------------------
// If deploying as a USER SITE (UsamMatrix.github.io):
//   base: "/"
//
// If deploying as a PROJECT SITE (UsamMatrix.github.io/portfolio):
//   base: "/portfolio/"
//
// Change the base value below to match your deployment target.
// ============================================================

export default defineConfig({
  plugins: [react()],
  base: "/",
});
