import TestProvider from "@/providers/TestContext";
import "./globals.css";
import "@/scss/main.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TestProvider>{children}</TestProvider>
      </body>
    </html>
  );
}
