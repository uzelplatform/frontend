import type { Metadata } from "next";
// import localFont from "next/font/local";
// import ReactQueryProvider from "@/query/react-query-provider";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Uzel",
  description: "Uzel Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-dm antialiased`}>
        {/* <ReactQueryProvider> */}

        {children}
        {/* </ReactQueryProvider> */}
      </body>
    </html>
  );
}
