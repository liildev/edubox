import { apple, play } from "../assets";

export default function Buttons() {
  return (
    <>
      <button>
        <a
          href="https://play.google.com/store/apps/details?id=app.educationbox.uz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={play} alt="Play" />
        </a>
      </button>
      <button>
        <img src={apple} alt="Apple" />
      </button>
    </>
  );
}
