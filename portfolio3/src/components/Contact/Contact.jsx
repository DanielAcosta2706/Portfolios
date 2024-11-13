import { socialLinks } from "./socialLinks";

export const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 reveal-up lg:max-w-[12ch]">
            Contact me for collaboration
          </h2>
          <p className="reveal-up mb-8 mt-3 max-w-[50ch] text-zinc-400 lg:max-w-[30ch]">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>
          <div className="mt-auto flex items-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                className="reveal-up grid h-12 w-12 place-items-center rounded-lg ring-2 ring-inset ring-zinc-50/5 transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
              >
                <figure>
                  <img
                    src={item.icon}
                    alt={item.alt}
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </figure>
              </a>
            ))}
          </div>
        </div>
        <form action="" method="POST" className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Type your name"
                className="text-field reveal-up"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Type your email"
                className="text-field reveal-up"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi! Type a Message"
              required
              className="text-field reveal-up max-h-80 min-h-32 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary reveal-up w-full justify-center [&]:max-w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
