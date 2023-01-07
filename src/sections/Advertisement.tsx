import { Container } from "../layout";
import { MotionTitle } from "../components/Motions";

export default function Advertisement() {
  return (
    <section className="bg-main py-4 md:py-8">
      <Container>
        <MotionTitle className="adver-title">
          EducationBox предлагает каталог учреждений связанных с образованием и
          учебным процессом в Узбекистане
        </MotionTitle>
      </Container>
    </section>
  );
}
