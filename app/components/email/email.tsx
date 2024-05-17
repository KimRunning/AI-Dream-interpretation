"use client";
import { useState, FormEvent } from "react";

const HomePage: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");

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
      setSubject("");
      setMessage("");
    } else {
      setStatus(`Failed to send email: ${result.message}`);
    }
  };

  return (
    <main className="w-full h-[88vh] flex justify-center items-center">
      <section className="w-[300px] h-[500px] bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-lg font-bold text-center mb-4">Send Email</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            defaultValue="minsuk7316@naver.com"
            readOnly
            placeholder="받을 사람"
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Name or Title"
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
            required
            className="p-2 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Send Email
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">{status}</p>
      </section>
    </main>
  );
};

export default HomePage;
