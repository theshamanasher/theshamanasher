import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactLoader from "../ux/ContactLoader";

const MOCK_EMAIL = true; // Set to false for production!

const Contact: React.FC = () => {
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (form.current) {
      if (MOCK_EMAIL) {
        // ====== MOCK MODE =======
        setTimeout(() => {
          setLoading(false);
          setSuccessfulSubmission(true);
          // To test error state, comment above and uncomment below:
          // setLoading(false);
          // setError(true);
        }, 2000);
      } else {
        // ====== REAL EMAILJS =======
        emailjs
          .sendForm(
            "service_7vlvm3u",
            "template_fdjfxht",
            form.current,
            "3s4MnL3-iCP2IDB21"
          )
          .then(
            () => {
              setLoading(false);
              setSuccessfulSubmission(true);
            },
            (err) => {
              setLoading(false);
              setError(true);
              console.log("FAILED...", err.text);
            }
          );
      }
    }
  };

  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="flex w-full bg-[#344245] justify-center py-64 sm:py-[120px] border-b-2">
        <div className="flex flex-col items-center w-full max-w-[550px]">
          <h1 className="mt-8 text-[#aabcbf] text-4xl md:text-6xl font-light">
            Contact
          </h1>
        </div>
      </div>

      <section className="bg-main-bg flex justify-center w-full">
        <div className="py-8 lg:py-16 px-4 mx-auto w-full max-w-[550px] mt-64">
          {successfulSubmission ? (
            <div className="flex flex-col items-center w-full">
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">
                Thank you for reaching out!
              </span>
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">
                Your message has been successfully sent, and we will get back to
                you as soon as possible.
              </span>
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-8 flex flex-col"
            >
              <div>
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Name"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Email"
                  required
                  disabled={loading}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mt-32 flex items-center gap-2"
                disabled={loading}
              >
                {loading ? <ContactLoader size="1.5em" /> : "Send message"}
              </button>
              {error && (
                <span className="text-red-500 text-center mt-2">
                  Something went wrong! Please try again.
                </span>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
