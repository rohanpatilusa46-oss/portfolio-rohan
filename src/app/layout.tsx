import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Rohan Patil Portfolio",
  description: "AI/ML Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-20 px-6 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}