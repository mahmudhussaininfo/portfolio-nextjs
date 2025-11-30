"use client";

import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setMsg("Thank you soo much!");
      e.target.reset();
      setTimeout(() => setMsg(""), 3000);
    } else {
      setMsg("Message failed to send!");
      setTimeout(() => setMsg(""), 3000);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col text-sm">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="md:text-2xl font-bold" htmlFor="name">
                Your Name
              </label>
              <input
                className="h-12 bg-background p-2 mt-2 w-full border border-primary rounded outline-none focus:border-indigo-300"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="w-full">
              <label className="md:text-2xl font-bold" htmlFor="name">
                Your Email
              </label>
              <input
                className="h-12 bg-background p-2 mt-2 w-full border border-primary rounded outline-none focus:border-indigo-300"
                type="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="md:text-2xl font-bold" htmlFor="name">
              Message
            </label>
            <textarea
              className="w-full bg-background mt-2 p-2 h-40 border border-primary rounded resize-none outline-none focus:border-indigo-300"
              required
              name="message"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-gradient md:text-xl mt-6 flex items-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {msg && (
            <p className="mt-4 text-center text-3xl text-primary p-2 font-bold">
              {msg}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
