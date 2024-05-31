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
    homeTitle11: t("homeTitle11"),
    homeTitle2: t("homeTitle2"),
    homeTitle21: t("homeTitle21"),
    homeTitle3: t("homeTitle3"),
    homeTitle31: t("homeTitle31"),
    explanation: t("explanation"),
    placehold: t("placehold"),
    workBtn: t("workBtn"),
    headerMainTitle: t("headerMainTitle"),
    headerTitle1: t("headerTitle1"),
    headerTitle11: t("headerTitle11"),
    headerTitle2: t("headerTitle2"),
    headerTitle21: t("headerTitle21"),
    headerTitle3: t("headerTitle3"),
    headerTitle31: t("headerTitle31"),
    headerLink1: t("headerLink1"),
    headerLink2: t("headerLink2"),
    headerLink3: t("headerLink3"),
    headerLinkB1: t("headerLinkB1"),
    headerLinkB2: t("headerLinkB2"),
    headerLinkB3: t("headerLinkB3"),
    communityTitle: t("communityTitle"),
    searchText: t("searchText"),
    inquireTitle: t("inquireTitle"),
    nameInput: t("nameInput"),
    message: t("message"),
    sendBtn: t("sendBtn"),
    CardAnswer: t("CardAnswer"),
    CardQuestion: t("CardQuestion"),
    listCardClose: t("listCardClose"),
    resultBtn1: t("resultBtn1"),
    resultBtn2: t("resultBtn2"),
    resultBtn3: t("resultBtn3"),
    ToastSuccess: t("ToastSuccess"),
    ToastFail: t("ToastFail"),
    ToastMappingError: t("ToastMappingError"),
    ToastDataNull: t("ToastDataNull"),
    SaveDreamDup: t("SaveDreamDup"),
    lodingStatus: t("lodingStatus"),
    lodingText: t("lodingText"),
    lodingText2: t("lodingText2"),
  };
  return <>{children(translations)}</>;
};

export default TranslationServerWrapper;
