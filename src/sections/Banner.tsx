import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { iphone } from "../assets";
import { Container } from "../layout";
import { Buttons } from "../components";

export default function Banner() {
  return (
    <section className="py-14 md:py-0">
      <Container>
        <div className="flex justify-between">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex flex-col justify-center md:w-2/3"
          >
            <h2 className="font-extrabold text-xl sx:text-2xl ss:text-3xl sm:text-4xl md:text-3xl xl:text-4xl">
              Уже на ваших смартфонах:
            </h2>

            <p className="mt-3 text-sm lg:text-lg w-full ss:w-[80%]">
              версия 1.0 запущена в I квартале 2023 года. Приложение доступно в
              App Store и Google Play и бесплатно для пользователей.
            </p>

            <div className="flex-center mt-10 gap-x-3 sm:gap-x-5">
              <Buttons />
            </div>
          </motion.div>

          <div className="hidden md:block w-[40%] overflow-y-hidden">
            <motion.img
              src={iphone}
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="object-contain w-full h-full"
              alt="Iphone"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
