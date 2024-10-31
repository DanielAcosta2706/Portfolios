import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // Crear un nuevo servicio GMAIL en emailjs y agregar credenciales
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
      publicKey: "YOUR_PUBLIC_KEY",
    });
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section_Title">Get in touch</h2>
      <span className="section_Subtitle">Contact Me</span>
      <div className="lg:cont mx-mbottm15 grid grid-cols-[1fr] justify-center gap-x-12 gap-y-12 pb-12 md:grid-cols-[repeat(2,_max-content)] lgx:gap-x-24">
        <div className="contact_Content">
          <h3 className="contact_Title">Talk to me</h3>
          <div className="grid grid-cols-[300px] justify-center gap-y-4">
            <div className="contact_Card">
              <i className="bx bx-mail-send contact_Card-icon"></i>
              <h3 className="contact_Card-title">Email</h3>
              <span className="contact_Card-data">user@gmail.com</span>
              <Link
                to="mailto:examplemail@gmail.com"
                className="demo_Button justify-center"
              >
                Write me
                <i className="bx bx-right-arrow-alt demo_Button-icon"></i>
              </Link>
            </div>
            <div className="contact_Card">
              <i className="bx bxl-whatsapp contact_Card-icon"></i>
              <h3 className="contact_Card-title">Whatsapp</h3>
              <span className="contact_Card-data">999-888-777</span>
              <Link
                to="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
                className="demo_Button justify-center"
              >
                Write me
                <i className="bx bx-right-arrow-alt demo_Button-icon"></i>
              </Link>
            </div>
            <div className="contact_Card">
              <i className="bx bxl-messenger contact_Card-icon"></i>
              <h3 className="contact_Card-title">Messenger</h3>
              <span className="contact_Card-data">user.fb123</span>
              <Link
                to="https://m.me/crypticalcoder"
                className="demo_Button justify-center"
              >
                Write me
                <i className="bx bx-right-arrow-alt demo_Button-icon"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="contact_Content">
          <h3 className="contact_Title">Write me your project</h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="m-auto flex w-[360px] flex-col"
          >
            <div className="contact_Form-div">
              <label htmlFor="" className="contact_Form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact_Form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact_Form-div">
              <label htmlFor="" className="contact_Form-tag">
                Mail
              </label>
              <input
                type="email"
                name="email"
                className="contact_Form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact_Form-div h-44">
              <label htmlFor="" className="contact_Form-tag">
                Project
              </label>
              <textarea
                name="project"
                className="contact_Form-input resize-none"
                placeholder="Write your project"
              ></textarea>
            </div>
            <button className="button mt-4">Send Message💬</button>
          </form>
        </div>
      </div>
    </section>
  );
};
