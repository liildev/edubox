import { apple, play } from "../assets";

export default function Buttons() {
  return (
    <>
      <button>
        <img src={play} alt="Play" />
      </button>
      <button>
        <img src={apple} alt="Apple" />
      </button>
    </>
  );
}
