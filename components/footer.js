import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black ">
      <div className="py-28 flex flex-col items-start container mx-auto">
        <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-tight text-left mb-10">
          RENT BETTER WITH MATEO
        </h3>
        <div className="mb-32">
          <a
            href={`https://twitter.com/mateoestate`}
            className="hover:underline mb-1 text-white"
          >
            <FontAwesomeIcon
              className="mr-5 text-4xl lg:text-5xl text-white"
              icon={faTwitter}
            />
          </a>
          <a
            href={`https://instagram.com/mateo.estate`}
            className="hover:underline hover:pointer mb-1 text-white"
          >
            <FontAwesomeIcon
              className="mr-5 text-4xl lg:text-5xl text-white"
              icon={faInstagram}
            />
          </a>
          <a
            href={`https://facebook.com/mateoestate`}
            className="hover:underline hover:pointer mb-1 text-white"
          >
            <FontAwesomeIcon
              className="mr-5 text-4xl lg:text-5xl text-white"
              icon={faFacebook}
            />
          </a>
          <a
            href={`https://linkedin.com/company/mateoestate`}
            className="hover:underline hover:pointer mb-1 text-white"
          >
            <FontAwesomeIcon
              className="mr-5 text-4xl lg:text-5xl text-white"
              icon={faLinkedin}
            />
          </a>
        </div>
        <div className="flex flex-col justify-start items-start text-2xl">
          <a
            href={`https://heyanna.co/imprint`}
            className="hover:underline mb-1 text-white"
          >
            Imprint
          </a>
          <a
            href={`https://heyanna.co/privacy`}
            className="hover:underline text-white"
          >
            Data Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
