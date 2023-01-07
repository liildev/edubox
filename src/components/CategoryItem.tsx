import { ICategory } from "../types";
import { MotionDiv } from "./Motions";

interface Props {
  category: ICategory;
}

export default function CategoryItem({ category }: Props) {
  return (
    <MotionDiv className="category-content">
      <h3 className="w-[20%] text-[10px] sx:text-[12px] ss:text-sm sm:text-xl lg:text-2xl">
        {category.title}
      </h3>
      <img
        src={category.image}
        className="w-[60px] ss:w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[150px]"
        alt="Category"
      />
    </MotionDiv>
  );
}
