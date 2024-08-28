import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
//import { ThemeProvider } from "@/components/ui/theme-provider";
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // Including multiple weights allows you to use different font styles throughout our application,
  weight: ["300", "400", "500", "600", "700"],
  // This variable can be used in our CSS or styled components to apply the font to elements.
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "VitalCare",
  description: "A Healthcare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Rendering RootLayout");
  return (
    <html lang="en">
      {/* cn--classname,min-h-screen--min height of 100vh i.e home page will take full screen*/}
      {/* cn--used to integrate css variables like'font-sans'variable */}
      {/* antialiased-- make some fonts look beter */}
      {/* To indicate the use of font-sans,use font-sans.variable */}
      {/* bg-300--these kind of css will be there at tailwind.config.ts.The benefit is normally,we use some numerics like #efef whre we can make mistake. So it is easy to store all needed css inn in 1 file and access them using simple color-shade i.e dark-500 */}
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
