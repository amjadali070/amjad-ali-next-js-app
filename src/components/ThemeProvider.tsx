"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

// Manually defining props since export might vary or be generic
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
