import { MotionDiv } from "../components";
import { footerLogo } from "../assets";
import { Container } from "../layout";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () => window.scroll(0, 0);

  return (
    <footer className="bg-main text-white">
      <Container>
        <MotionDiv className="footer-wrapper">
          <div>
            <Link to="/" onClick={scrollTop}>
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
              <a
                href="https://apps.apple.com/us/app/education-box/id6446034429"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                App Store
              </a>
            </li>
            <li className="footer-item">
              <a
                href="https://play.google.com/store/apps/details?id=app.educationbox.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Google Play
              </a>
            </li>

            <li className="footer-item">
              <Link
                to={"/policy"}
                className="hover:underline"
                onClick={scrollTop}
              >
                Пользовательское соглашение и <br /> политика конфиденциальности
              </Link>
            </li>
          </ul>

          <ul className="space-y-1 ss:space-y-3">
            <li className="font-semibold footer-item">Контакты:</li>
            <li className="footer-item">
              <a href="mailto:info@educationbox.uz" className="hover:underline">
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
