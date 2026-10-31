import type { Metadata } from "next";
import { Lora, Karla } from "next/font/google";
import "./globals.css";

const serif = Lora({
  variable: "--font-serif-family",
  subsets: ["latin"],
});

const sans = Karla({
  variable: "--font-sans-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Pedroso",
  description: "Desenvolvedor web formado em Análise e Desenvolvimento de Sistemas. Alguns projetos que fiz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
