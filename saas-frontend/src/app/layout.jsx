import "./globals.css";
import BackgroundGlow from "../components/ui/BackgroundGlow";

export const metadata = {
  title: "SaaSify",
  description: "Modern SaaS Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <BackgroundGlow />
        {children}
      </body>
    </html>
  );
}
