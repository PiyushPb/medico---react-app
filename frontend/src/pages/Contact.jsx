import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          If you have any questions, please contact us
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label for="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@domain.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label for="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="form__label">
              Your message
            </label>
            <textarea
              rows="6"
              type="email"
              id="email"
              placeholder="Leave a comment ..."
              className="form__input mt-1"
            />
          </div>
          <button className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
