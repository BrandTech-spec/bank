import {
  Copyright,
  Facebook,
  Instagram,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const PageFooter = () => {
  const footerLinks = [
    {
      title: "Personal",
      links: [
        { name: "Virtual Cards", link: "/home" },
        { name: " Money Transfer", link: "/about" },
        { name: "Crypto Exchange", link: "/" },
        { name: " Airtime Top Up", link: "/" },
      ],
    },

    {
      title: "Business",
      links: [
        { name: "Saving", link: "/home" },
        { name: "A Propos", link: "/about" },
        { name: "Personnel", link: "/" },
        { name: "contact", link: "/" },
      ],
    },

    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", link: "/home" },
        { name: "Cookies Policy", link: "/about" },
        { name: "Terms of Service", link: "/" },
        { name: "Horizon Card Terms", link: "/" },
      ],
    },

    {
      title: "Contact",
      links: [
        { name: "customer@nike.com", link: "mailto:customer@nike.com" },
        { name: "+92554862354", link: "tel:+92554862354" },
      ],
    },
  ];
  const HomeBackground = "./KOBE-CTA-BG.png";
  return (
    <footer className="w-full flex flex-col space-y-7  items-center justify-center min-h-screen py-8 px-2 z-50  bg-dark-100 text-white">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${HomeBackground})`,
          overflow: "hidden",
        }}
        className="flex w-[80%] h-[60%] max-md:w-[95%] max-md:h-auto rounded-lg space-y-4 text-white overflow-hidden  bg-contain bg-opacity-60 bg-no-repeat object-cover  flex-col items-center  py-11"
      >
        <h1 className="lg:text-6xl font-extrabold text-3xl">
          Prêt à commencer ?
        </h1>
        <p className="text-gray-500 font-bold">
          Créez un compte instantanément pour créer des cartes virtuelles VISA
          et Mastercard et <br /> commencez à dépenser en ligne.
        </p>
        <div className="space-x-3">
          <Link
            className="px-2 py-2 rounded-md bg-bankGradient"
            to={"/sign-up"}
          >
            Rejoindre
          </Link>
          <Link
            className="px-2 py-2 rounded-md border-gray-500 border-2"
            to={"/contact-us"}
          >
            Contactez-nous
          </Link>
        </div>
      </div>
      <section className="w-full flex max-md:flex-col gap-6 ">
        <div className="w-1/5 max-md:w-full text-center space-y-5">
          <div>
            <Link
              to="/home"
              className="mb-12 z-50 cursor-pointer flex flex-col items-center gap-2"
            >
              <img
                src="./icons/logo.svg"
                alt="Horizon logo"
                className="size-[100px] w-34 h-34 max-xl:size-14"
              />
              <h1 className="text-white font-extrabold text-3xl">Horizon Finance</h1>
            </Link>
          </div>
          <p>
            Votre application financière numéro 1 pour tous les paiements,
            partout dans le monde.
          </p>
          <div className=" flex items-start max-md:items-center max-md:justify-center justify-start gap-4">
            <div className="p-2 rounded-md bg-dark-200 w-auto h-auto hover:bg-white hover:scale-120 transition-all duration-300 hover:text-bankGradient">
              <LinkedinIcon />
            </div>

            <div className="p-2 rounded-md bg-dark-200 w-auto h-auto hover:bg-white hover:scale-120 transition-all duration-300 hover:text-bankGradient">
              <Twitter />
            </div>

            <div className="p-2 rounded-md bg-dark-200 w-auto h-auto hover:bg-white hover:scale-120 transition-all duration-300 hover:text-bankGradient">
              <Instagram />
            </div>

            <div className="p-2 rounded-md bg-dark-200 w-auto h-auto hover:bg-white hover:scale-120 transition-all duration-300 hover:text-bankGradient">
              <Facebook />
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-4 max-md:grid-cols-2 gap-3">
          {footerLinks.map((link) => (
            <div className=" text-left" key={link.title}>
              <h1 className="font-bold underline">{link.title} </h1>
              <ul>
                {link.links.map((l, i) => (
                  <li
                    key={i}
                    className="hover:underline hover:text-bankGradient"
                  >
                    <Link to={l.link}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full text-left space-y-6 text-sm text-gray-400">
        <p>
          Horizon est une entreprise de technologie financière et non une banque.
        </p>
        <p>
          Our partner banks, which hold valid banking <br /> licenses, provide banking
          services. The debit cards we offer are issued <br /> by these partner banks
          under licenses granted by Visa and MasterCard,<br /> allowing you to use
          them at any location that accepts Visa and MasterCard debit cards.
        </p>
      </div>
      <Separator className="bg-gray-500 text-gray-400" />
      <div className="w-full text-center h-24">
        <p>© 2025 · Horizon Financial Technologies</p>
      </div>
    </footer>
  );
};

export default PageFooter;
