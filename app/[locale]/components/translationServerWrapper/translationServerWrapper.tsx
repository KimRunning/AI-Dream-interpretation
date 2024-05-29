// /app/components/TranslationServerWrapper.tsx
import { ReactNode } from "react";
import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";

interface TranslationServerWrapperProps {
  locale: LocaleTypes;
  children: (translations: Record<string, string>) => ReactNode;
}

const TranslationServerWrapper = async ({ locale, children }: TranslationServerWrapperProps) => {
  const { t } = await createTranslation(locale, "common");
  const translations = {
    homeTitle1: t("homeTitle1"),
    homeTitle2: t("homeTitle2"),
    homeTitle3: t("homeTitle3"),
    explanation: t("explanation"),
    workBtn: t("workBtn"),
    // 필요한 번역 키들을 추가하세요
  };
  return <>{children(translations)}</>;
};

export default TranslationServerWrapper;
