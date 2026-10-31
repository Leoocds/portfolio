import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Pedroso · Desenvolvedor Full Stack",
  description: "Desenvolvedor full stack formado em Análise e Desenvolvimento de Sistemas. React, Next.js e Node.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geist.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
