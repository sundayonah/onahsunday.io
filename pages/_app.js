import { Analytics } from "@vercel/analytics/react";
import '../styles/globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import LearningBanner from '../components/LearningBanner';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LearningBanner />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
