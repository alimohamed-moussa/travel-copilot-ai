import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "Travel Copilot AI",
  description: "AI travel copilot for flight discovery and recommendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}