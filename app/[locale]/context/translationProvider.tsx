// /app/context/TranslationProvider.tsx
"use client";

import { ReactNode } from "react";
import TranslationContext from "./translationContext";

interface TranslationProviderProps {
  translations: Record<string, string>;
  children: ReactNode;
}

const TranslationProvider = ({ translations, children }: TranslationProviderProps) => {
  const t = (key: string) => translations[key] || key;
  return <TranslationContext.Provider value={t}>{children}</TranslationContext.Provider>;
};

export default TranslationProvider;
