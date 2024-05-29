"use client";
// /app/context/TranslationContext.tsx
import { createContext, useContext } from "react";

type TranslationFunction = (key: string) => string;

const TranslationContext = createContext<TranslationFunction | null>(null);

export const useTranslation = (): { t: TranslationFunction } => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return { t: context };
};

export default TranslationContext;
