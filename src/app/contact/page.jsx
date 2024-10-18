"use client";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <section className=" container mx-auto">
        <div className=" flex flex-col justify-center items-center py-10">
          <h1 className="text-4xl font-semibold tracking-widest uppercase">
            Contact Us
          </h1>

          <div className="w-[700px] h-[500px] bg-slate-200 shadow-md shadow-orange-200 rounded-xl left-[500px] bottom-10 p-10">
            <div className="text-center">
              <h1>Get in touch today</h1>
              <p className="mb-4 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                ducimus vitae expedita earum accusantium velit.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-md py-2 px-3 text-white w-1/2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-md py-2 px-3 text-white w-1/2"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-md py-2 px-3 text-white w-full"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="rounded-md py-2 px-3 text-white w-full"
                ></textarea>
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
