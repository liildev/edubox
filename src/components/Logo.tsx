import { Link } from "react-router-dom";
import { logo } from "../assets";
import { motion } from "framer-motion";
import { topVariant } from "../utils/motion";

export default function Logo() {
  return (
    <motion.div variants={topVariant} className="logo-wrapper">
      <Link to={"/"}>
        <img src={logo} className="object-cover w-full h-full" alt="Logo" />
      </Link>
    </motion.div>
  );
}
