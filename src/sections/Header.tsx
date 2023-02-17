import { motion } from "framer-motion";
import { banner } from "../assets";
import { Container } from "../layout";
import { slideIn, topVariant } from "../utils/motion";
import { MotionDesc, MotionDiv, Devider, Buttons, Logo } from "../components";

export default function Hero() {
  return (
    <section id="home">
      <Container>
        <div className="header-wrapper">
          <div className="w-full md:w-[45%]">
            <Logo />

            <motion.h1 variants={topVariant} className="header-title">
              УЧЕБНЫЕ ЗАВЕДЕНИЯ В УЗБЕКИСТАНЕ
            </motion.h1>

            <Devider />

            <MotionDesc className="header-desc">
              Теперь вам не придётся тратить время, подыскивая учреждения,
              выбирая из бесчисленного множества площадок. Лучшие места для
              обучения, их описания, адреса, телефоны, время работы теперь
              всегда под рукой.
            </MotionDesc>

            <MotionDesc className="md:block hidden mt-10 lg:mt-24 xl:mt-28 text-[10px] md:text-[12px] lg:text-sm">
              Скачайте мобильное приложение бесплатно
            </MotionDesc>

            <MotionDiv className="md:flex items-center mt-5 gap-x-5 hidden">
              <Buttons />
            </MotionDiv>
          </div>

          <div className="md:w-1/2 mt-16 md:mt-0 overflow-x-hidden">
            <motion.img
              src={banner}
              variants={slideIn("right", "tween", 0.2, 1)}
              className="object-fill w-full h-full"
              alt="Banner"
            />
          </div>

          <span className="md:hidden mt-10 ss:mt-16 block text-[10px] ss:text-sm text-center">
            Скачайте мобильное приложение бесплатно
          </span>

          <MotionDiv className="header-content">
            <Buttons />
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
