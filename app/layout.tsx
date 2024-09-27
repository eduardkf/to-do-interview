import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Text } from '@radix-ui/themes';
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Interview To do APP",
  description: "KF todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="h-screen w-screen flex flex-row">
          <div className="w-[13%] shadow-xl p-2">
            <div className="mt-5 p-3">
              <Text className="text-xl font-medium">Menu</Text>
            </div>
            <div className="flex flex-row hover:bg-gray-100 p-2 rounded-xl hover:cursor-pointer  items-center w-full justify-between">
              <Text className="text-sm ">Home</Text>
              <div className="bg-gray-200/40 p-2 rounded-xl items-center">
                <Text className="text-sm ">8</Text>
              </div>
            </div>

          </div>
          <div className="bg-[#F5F5F5] px-32 py-20 w-full">
            {children}

          </div>
        </div>

      </body>
    </html>
  );
}
