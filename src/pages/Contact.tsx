import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_7vlvm3u', 'template_fdjfxht', form.current, '3s4MnL3-iCP2IDB21')
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccessfulSubmission(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };


  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="flex w-full bg-[#344245] justify-center py-64 sm:py-[120px] border-b-2">
          <div className="flex flex-col items-center w-full max-w-[550px]">
            <h1 className="mt-8 text-[#aabcbf] text-6xl font-light">Contact</h1>

            <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</span>
          </div>
        </div>

        <section className="bg-main-bg flex justify-center w-full">
        <div className="py-8 lg:py-16 px-4 mx-auto w-full max-w-[550px] mt-64">
          {successfulSubmission ? (
            <div className="flex flex-col items-center w-full">
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">Thank you for reaching out! </span>
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light"> Your message has been successfully sent, and we will get back to you as soon as possible.</span>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-8 flex flex-col">
              <div>
                <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                <input type="text" name="user_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
              </div>
              <div>
                <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mt-32">Send message</button>
            </form>
          )}
        </div>
      </section>
        
    </div>
  )
}

export default Contact