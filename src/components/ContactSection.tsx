const ContactSection = () => {
  return (
    <div
      id="contact"
      className="container mx-auto mt-50 mb-20 flex w-full items-center justify-between px-8 md:px-5 lg:px-15"
    >
      <section className="w-full">
        <h2 className="secondary-title">お問い合わせ</h2>
        <div className="mt-16 grid w-full gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="space-y-12">
            <form
              action="https://formspree.io/f/manbgpyy"
              method="POST"
              className="space-y-12"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-6 block text-xl font-bold text-white"
                >
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-describedby="name-error"
                  className="border-inputBorder bg-input w-full border px-4 py-4"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-6 block text-xl font-bold text-white"
                >
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-describedby="email-error"
                  className="border-inputBorder bg-input w-full border px-4 py-4"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-6 block text-xl font-bold text-white"
                >
                  メッセージ <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  aria-describedby="message-error"
                  className="border-inputBorder bg-input resize-vertical w-full border px-4 py-4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="button px-6 py-2 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                送信する
              </button>
            </form>
          </div>
          <div>
            <a href="mailto:a2c6201@gmail.com">a2c6201@gmail.com</a>

            <div className="mt-20 space-x-6">
              <a href="https://x.com/ballemech">
                <i className="fa-brands fa-x-twitter text-3xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/%E6%95%A6%E5%8F%B2-%E7%A6%8F%E6%B0%B8-a3356b227/">
                <i className="fa-brands fa-linkedin text-3xl text-blue-400"></i>
              </a>
              <a href="https://github.com/balle-mech">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
