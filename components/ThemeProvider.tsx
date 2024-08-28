"use client";
// This ensures that the component gets the correct types for properties like defaultTheme, forcedTheme, and any other configuration options available in next-themes.

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
