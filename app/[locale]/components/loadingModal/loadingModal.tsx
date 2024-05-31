import Image from "next/image";
import moonIcon from "../../../../public/Icon/해몽Icon.png";
import { useTranslation } from "../../context/translationContext";

interface LoadingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex  justify-center items-center z-50">
      <div className="bg-white p-5 rounded-md sm:w-[500px] text-center relative">
        <Image className="w-20 h-20 bg-contain bg-no-repeat bg-center animate-spin mx-auto mb-4" src={moonIcon} alt="꿈알무 아이콘" />
        <h2 className="text-4xl mb-4 text-bold">{t("lodingStatus")}</h2>
        <br />
        <p className="text-xl text-center text-semibold ">
          {t("lodingText")}
          <br />
          <br />
          <span className="text-2xl text-semibold">{t("lodingText2")}</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingModal;
