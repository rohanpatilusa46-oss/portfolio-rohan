import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";


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
      <body className="bg-black text-white overflow-x-hidden">

        {/* 🌌 Global Background */}
        <Background />


        {/* 🔝 Navbar */}
        <Navbar />

        {/* 📄 Main Content */}
        <main className="relative pt-24 px-6 md:px-12 max-w-7xl mx-auto">
          {children}
        </main>

      </body>
    </html>
  );
}