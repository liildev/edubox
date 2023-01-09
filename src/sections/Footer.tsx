import { MotionDiv } from "../components";
import { footerLogo } from "../assets";
import { Container } from "../layout";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-main text-white">
      <Container>
        <MotionDiv className="footer-wrapper">
          <div>
            <Link to="/">
              <img
                src={footerLogo}
                className="w-[200px] ss:w-[250px] md:w-[200px] lg:w-[300px]"
                alt="Logo"
              />
            </Link>
            <p className="mt-5 text-sm xl:text-lg">
              Каталог учебных заведеный в Узбекистане
            </p>
          </div>

          <ul className="space-y-5 ss:space-y-2">
            <li className="footer-item">
              <a href="#sdfsd" className="hover:underline">
                App Store
              </a>
            </li>
            <li className="footer-item">
              <a href="#sdf" className="hover:underline">
                Google Play
              </a>
            </li>

            <li className="footer-item">
              <Link to={"/policy"} className="hover:underline">
                Пользовательское соглашение и <br /> политика конфиденциальности
              </Link>
            </li>
          </ul>

          <ul className="space-y-1 ss:space-y-3">
            <li className="font-semibold footer-item">Контакты:</li>
            <li className="footer-item">
              <a href="mailto:" className="hover:underline">
                info@educationbox.uz
              </a>
            </li>
            <li className="footer-item">
              <a href="tel:+998981118006" className="hover:underline">
                +998981118006
              </a>
            </li>
          </ul>
        </MotionDiv>
      </Container>
    </footer>
  );
}
