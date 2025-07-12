import { Analytics } from "@vercel/analytics/react";
import '../styles/globals.css'; 
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
