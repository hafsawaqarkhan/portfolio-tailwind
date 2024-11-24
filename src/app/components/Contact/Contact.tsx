"use client";
import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('msg') as HTMLTextAreaElement).value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    // Further processing like sending data to an API or backend
    alert("Message sent successfully!");
  };

  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10 md:gap-6">
        <div className="space-y-8">
          <h2 className="text-5xl">
            Get in touch</h2>
        
          <div className="flex gap-3 items-center">
            <AiOutlineMail size={30} /> <a href="mailto:hafsawaqarkhan144@gmail.com">hafsawaqarkhan144@gmail.com</a>
          </div>
          
        </div>

        {/* Right side: Contact Form */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="h-[40px] bg-transparent border border-accent"
                id="name"
                aria-label="Your name"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="h-[40px] bg-transparent border border-accent"
                id="email"
                aria-label="Your email"
                required
              />
            </div>
            <div className="flex flex-col gap-1" >
              <label htmlFor="msg">Message</label>
              <textarea
                className="bg-transparent border border-accent min-h-[100px] resize-none"
                id="msg"
                aria-label="Your message"
                rows={8}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-accent p-2 px-6 bg-white border border-black hover:bg-accent-dark transition duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;