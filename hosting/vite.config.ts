import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "process.env": {
      SKIP_PREFLIGHT_CHECK: true,
      FIREBASE_CONFIG_API_KEY: "AIzaSyCZ4jK7WIG1f1qeBd8OCo1qRYz9o4NKPb8",
      FIREBASE_CONFIG_AUTH_DOMAIN: "msb-landing.firebaseapp.com",
      FIREBASE_CONFIG_PROJECT_ID: "msb-landing",
      FIREBASE_CONFIG_STORAGE_BUCKET: "msb-landing.appspot.com",
      FIREBASE_CONFIG_MESSAGING_SENDER_ID: "502190279006",
      FIREBASE_CONFIG_APP_ID: "1:502190279006:web:213059791edd26331b27cf",
      REACT_APP_SERVER_URL: "https://us-central1-msb-landing.cloudfunctions.net/app/api",
      // REACT_APP_SERVER_URL: "http://localhost:12345/msb-landing/us-central1/app/api",
    },
  },
  server: {
    host: "localhost",
  },
});
