import "@/styles/globals.css";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { ThemeProvider } from "@/components/theme-provider";

// Stagewise toolbar configuration
const stagewiseConfig = {
  plugins: [],
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
      {/* Only show stagewise toolbar in development mode */}
      {process.env.NODE_ENV === "development" && (
        <StagewiseToolbar config={stagewiseConfig} />
      )}
    </ThemeProvider>
  );
}
