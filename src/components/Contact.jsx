import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <motion.div
      className="border-t border-stone-900 pb-24 px-4 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Title */}
      <motion.h2
        className="my-10 text-center text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        className="text-center tracking-tighter flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Address */}
        <p className="my-2 text-sm lg:text-base">{CONTACT.address}</p>

        {/* Clickable Phone Number */}
        <motion.a
          href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`} // removes spaces for safety
          className="border-b text-sm lg:text-base hover:text-stone-400 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          {CONTACT.phoneNo}
        </motion.a>

        {/* Clickable Email */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b text-sm lg:text-base hover:text-stone-400 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
