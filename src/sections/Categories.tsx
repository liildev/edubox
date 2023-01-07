import { categories } from "../constants";
import { CategoryItem, MotionDesc } from "../components";
import { Container } from "../layout";

export default function Categories() {
  return (
    <section>
      <Container>
        <MotionDesc className="categories-desc">
          Для вашего удобства, мы собрали всё в одном месте!
        </MotionDesc>

        <div className="categories-block">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
