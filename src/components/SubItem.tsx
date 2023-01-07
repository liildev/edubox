import { ICategory } from "../types";
import { MotionDiv, MotionHeading } from "./Motions";

interface Props {
  sub: ICategory;
}

export default function SubItem({ sub }: Props) {
  return (
    <MotionDiv className="w-full flex-center flex-col justify-between">
      <img
        src={sub.image}
        className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px]"
        alt="Sub"
      />

      <MotionHeading
        title={sub.title}
        textStyles={"mt-5 text-[8px] ss:text-[10px] sm:text-sm text-center"}
      />
    </MotionDiv>
  );
}
