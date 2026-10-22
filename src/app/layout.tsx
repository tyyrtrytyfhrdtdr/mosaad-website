import "./globals.css";

export const metadata = {
  title: "MOSAAD | PHOENIX",
  description: "Largest importer in Egypt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
