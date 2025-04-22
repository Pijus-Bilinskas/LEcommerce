import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";


export const metadata: Metadata = {
  title: "Sum store",
  description: "buy random products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
