import { subs } from "../constants";
import { SubItem } from "../components";
import { Container } from "../layout";
import { MotionDesc, MotionTitle } from "../components/Motions";

export default function Subs() {
  return (
    <section className="bg-main text-white">
      <Container>
        <MotionTitle className="font-semibold ss:text-xl sm:text-3xl lg:text-4xl text-center">
          Думаете как выбрать новую профессию, пройти курсы повышения
          квалификации или найти интересное хобби?
        </MotionTitle>

        <MotionDesc className="mt-5 md:mt-10 lg:mt-20 text-center text-[12px] sm:text-lg">
          Удобная навигация поможет вам найти курсы по душе и специализации:
        </MotionDesc>

        <div className="subs-content">
          {subs.map((sub) => (
            <SubItem key={sub.id} sub={sub} />
          ))}
        </div>
      </Container>
    </section>
  );
}
