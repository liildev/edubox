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
        <a
          href="https://apps.apple.com/us/app/education-box/id6446034429"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={apple} alt="Apple" />
        </a>
      </button>
    </>
  );
}
