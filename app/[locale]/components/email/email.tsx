"use client";
import { useState, FormEvent } from "react";
import { useTranslation } from "../../context/translationContext";

const HomePage: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const { t } = useTranslation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");
    setIsSuccess(null);

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "minsuk7316@naver.com",
        subject: subject,
        text: message,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus("Email sent successfully!");
      setIsSuccess(true);
      setSubject("");
      setMessage("");
    } else {
      setStatus(`Failed to send email: ${result.message}`);
      setIsSuccess(false);
    }
    setIsLoading(false);
  };

  return (
    <main className="w-full h-[88vh] flex justify-center items-center">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-transparent p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-200 mx-auto"></div>
          </div>
        </div>
      )}
      <section className="w-[300px] h-[500px] bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-lg font-bold text-center mb-4">{t("inquireTitle")}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            defaultValue="minsuk7316@naver.com"
            readOnly
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder={t("nameInput")}
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={t("message")}
            required
            className="p-2 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {t("sendBtn")}
          </button>
        </form>
        <p className={`text-center mt-4 text-sm ${isSuccess === true ? "text-green-500" : isSuccess === false ? "text-red-500" : ""}`}>{status}</p>
      </section>
    </main>
  );
};

export default HomePage;
