"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Sidebar contact info
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(816)-730-5153",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "braxtondennis3@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Area",
    description: "Kansas City, MO",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgonepv"); // Replace with your Formspree ID

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* === Form Column === */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center gap-6 p-10 bg-[#27272c] rounded-xl text-center">
                <h3 className="text-4xl text-accent">Thank you for your message!</h3>
                <p className="text-white/70 max-w-md">
                  I’ve received your message and will be in touch soon. Thanks for reaching out!
                </p>
                <a
                  href="/"
                  className="inline-block bg-accent hover:bg-accent/80 text-black font-medium px-6 py-3 rounded-md transition-all"
                >
                  Return to Home
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">let&apos;s work together</h3>
                <p className="text-white/60">
                  If you would like to work together or want me to submit my resume to a job you
                  recommend, send me a message!
                </p>

                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="firstname" placeholder="First Name" required />
                  <Input type="text" name="lastname" placeholder="Last Name" required />
                  <Input type="email" name="email" placeholder="Email Address" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Service Dropdown */}
                <Select name="service" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Service</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="logo">Logo Design</SelectItem>
                      <SelectItem value="software">Software Engineer</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* Message */}
                <Textarea
                  name="message"
                  className="h-[200px] resize-none"
                  placeholder="Type Your Message Here"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                {/* Submit */}
                <Button size="md" className="max-w-40" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* === Contact Info Column === */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
