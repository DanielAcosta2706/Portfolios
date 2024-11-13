import { ButtonPrimary } from "../Hero/ButtonPrimary";
import { footerItems } from "./footerItems";
import { footerSocial } from "./footerSocial";

export const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 reveal-up mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:danyel2706@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="reveal-up mb-2">Sitemap</p>
              <ul>
                {footerItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="reveal-up block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="reveal-up mb-2">Socials</p>
              <ul>
                {footerSocial.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      className="reveal-up block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8 flex items-center justify-between pt-10">
          <a href="/" className="logo reveal-up">
            <img
              src="logo1.svg"
              alt="Logo Daniel Acosta"
              width={40}
              height={40}
            />
          </a>
          <p className="reveal-up text-sm text-zinc-500">
            &copy; 2024 <span className="text-zinc-200">Daniel Acosta</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
