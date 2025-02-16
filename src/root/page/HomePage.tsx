import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-full space-y-5 px-2">
      {/*<nav className="fixed top-0 inset-x-0 z-50">
        <img src="./images/logo.svg" alt="" />
        <div className="nav-items max-md:hidden">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Carriers</a>
        </div>
        <button>Rejoignez maintenant</button>
      </nav>*/}
      <header className=" flex  items-center justify-around px-2 max-md:flex-col">
        <div className=" px-3  my-2">
          <h1 className="lg:text-7xl text-3xl font-extrabold ">
            Prochaine génération <br /> services bancaires numériques
          </h1>
          <p className=" font-serif">
            Prenez votre vie financière en ligne. Votre compte bancaire facile{" "}
            <br /> sera un guichet unique pour dépenser, épargner, <br />{" "}
            budgétiser, investir, et bien plus encore.
          </p>
          <Link to="/sign-up" className="btn">Rejoignez maintenant</Link>
        </div>
        <div className="hero-img-container">
          <img src="./images/image-mockups.png" alt="" />
        </div>
      </header>
      <div className="  w-full">
        <section className=" lg:max-w-[100%] px-3 space-y-2 w-full text-center ">
          <h1 className="font-extrabold text-3xl 6xl">
            Pourquoi choisir Easybank?
          </h1>
          <p className="text-wrap">
            Nous exploitons la banque ouverte pour transformer votre compte
            bancaire en centre financier. <br /> Contrôlez vos finances comme
            jamais auparavant.
          </p>
        </section>
        <section className=" w-full h-auto flex max-md:hidden   gap-4 lg:items-end lg:justify-end my-10  max-md:overflow-x-auto ">
          <div className="feature-item">
            <img src="./images/icon-online.svg" alt="" />
            <h1>Banque en ligne</h1>
            <p>
              Nos applications web et mobiles modernes <br /> vous permettent de
              suivre <br /> vos finances où que vous soyez dans le monde.
            </p>
          </div>
          <div className="feature-item">
            <img src="./images/icon-budgeting.svg" alt="" />
            <h1>Simple Budgeting</h1>
            <p>
              See exactly where your money
              <br />
              goes every month.Recieve
              <br />
              notifications when you're close to
              <br />
              hitting your limits
            </p>
          </div>

          <div className="feature-item">
            <img src="./images/icon-onboarding.svg" alt="" />
            <h1>Inscription rapide</h1>
            <p>
              Nous n'avons pas d'agences. Ouvrez votre <br /> compte en ligne en
              quelques minutes et commencez <br /> à prendre le contrôle de vos
              finances <br /> immédiatement.
            </p>
          </div>
          <div className="feature-item">
            <img src="./images/icon-api.svg" alt="" />
            <h1>Open API</h1>
            <p>
              Gérez vos économies, investissements, <br /> pension et bien plus
              encore depuis un seul <br /> compte. Suivre votre argent n'a{" "}
              <br /> jamais été aussi facile.
            </p>
          </div>
        </section>

        <section className="w-full relative my-14 overflow-hidden">
          <Carousel className="w-full  lg:hidden  ">
            <CarouselContent className="w-full ">
              <CarouselItem className="mx-5 ">
                <div className="">
                  <Card>
                    <CardContent className="flex  p-1   items-center justify-center ">
                      <div className="feature-item bg-white right-1 rounded-md shadow-2xl ring-white p-3">
                        <img src="./images/icon-online.svg" alt="" />
                        <h1>Banque en ligne</h1>
                        <p>
                          Nos applications web et mobiles modernes <br /> vous
                          permettent de suivre <br /> vos finances où que vous
                          soyez dans le monde.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="mx-5">
                <div className="">
                  <Card>
                    <CardContent className="flex px-2 items-center justify-center ">
                      <div className="feature-item  bg-white right-1 rounded-md shadow-2xl ring-white p-3">
                        <img src="./images/icon-onboarding.svg" alt="" />
                        <h1>Inscription rapide</h1>
                        <p>
                          Nous n'avons pas d'agences. Ouvrez votre <br /> compte
                          en ligne en quelques <br /> minutes et commencez <br /> à
                          prendre le contrôle de vos finances <br />{" "}
                          immédiatement.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="mx-5">
                <div className="">
                  <Card>
                    <CardContent className="flex  items-center justify-center ">
                      <div className=" pl-3 feature-item  bg-white right-1 rounded-md shadow-2xl ring-white p-3">
                        <img src="./images/icon-onboarding.svg" alt="" />
                        <h1>Fast Onboarding</h1>
                        <p>
                          We don't do branches.Open your
                          
                          accound <br />minutes online and start
                          <br />
                          taking controll of your finances
                          <br />
                          right away.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="">
                  <Card>
                    <CardContent className="flex  items-center justify-center ">
                      <div className="feature-item  bg-white right-1 rounded-md shadow-2xl ring-white p-3">
                        <img src="./images/icon-api.svg" alt="" />
                        <h1>Open API</h1>
                        <p>
                          Gérez vos économies, investissements, <br /> pension
                          et bien plus encore depuis un seul <br /> compte.
                          Suivre votre argent n'a <br /> jamais été aussi
                          facile.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute  left-[15%] z-40 top-[40%] bg-red-900 text-black" />
            <CarouselNext className="absolute    bg-red-900 right-[15%] z-40 top-[40%] text-black" />
          </Carousel>
        </section>

        <section className="blog-section max-md:hidden">
          <h1>Derniers articles</h1>
          <div className="article-container max-md:overflow-y-auto">
            <div className="article">
              <img src="./images/image-currency.jpg" alt="" />
              <div className="content">
                <h4>
                  {" "}
                  Recevez de l'argent dans n'importe quelle <br /> monnaie sans
                  frais.{" "}
                </h4>{" "}
                <p>
                  {" "}
                  Le monde devient plus petit et <br /> nous devenons plus
                  mobiles. Alors, <br /> pourquoi devriez-vous être obligé de ne{" "}
                  <br /> recevoir de l'argent qu'en une seule...{" "}
                </p>
              </div>
            </div>
            <div className="article">
              <img src="./images/image-restaurant.jpg" alt="" />
              <div className="content">
                <h4>
                  {" "}
                  Recevez de l'argent dans n'importe quelle <br /> monnaie sans
                  frais.{" "}
                </h4>{" "}
                <p>
                  {" "}
                  Notre fonctionnalité de budgétisation simple <br /> vous
                  permet de séparer vos <br /> dépenses et de définir des
                  limites réalistes <br /> chaque mois. Cela signifie que
                  vous...{" "}
                </p>
              </div>
            </div>
            <div className="article">
              <img src="./images/image-plane.jpg" alt="" />
              <div className="content">
                <h4>
                  {" "}
                  Emportez votre carte Easybank <br /> partout où vous allez.{" "}
                </h4>{" "}
                <p>
                  {" "}
                  Nous voulons que vous profitiez de vos voyages. <br /> C'est
                  pourquoi nous ne facturons aucun <br /> frais sur les achats
                  pendant que vous êtes <br /> à l'étranger. Nous vous
                  montrerons même...{" "}
                </p>
              </div>
            </div>
            <div className="article">
              <img src="./images/image-confetti.jpg" alt="" />
              <div className="content">
                <h4>
                  {" "}
                  Nos comptes Beta uniquement sur invitation <br /> sont
                  maintenant en ligne!{" "}
                </h4>{" "}
                <p>
                  {" "}
                  Après beaucoup de travail acharné de la part de <br /> toute
                  l'équipe, nous sommes ravis de lancer <br /> notre bêta
                  fermée. Il est facile de demander <br /> une invitation via le
                  site.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full relative overflow-hidden">
          <Carousel className="w-full  lg:hidden  ">
            <CarouselContent className="w-full ">
              <CarouselItem>
                <div className="">
                  <Card>
                    <CardContent className="flex  items-center justify-center ">
                      <div className="article">
                        <img src="./images/image-currency.jpg" alt="" />
                        <div className="content">
                          <h4>
                            {" "}
                            Recevez de l'argent dans n'importe quelle <br />{" "}
                            monnaie sans frais.{" "}
                          </h4>{" "}
                          <p>
                            {" "}
                            Le monde devient plus petit et <br /> nous devenons
                            plus mobiles. Alors, <br /> pourquoi devriez-vous
                            être obligé de ne <br /> recevoir de l'argent qu'en
                            une seule...{" "}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="">
                  <Card>
                    <CardContent className="flex  items-center justify-center ">
                      <div className="article">
                        <img src="./images/image-restaurant.jpg" alt="" />
                        <div className="content">
                          <h4>
                            {" "}
                            Recevez de l'argent dans n'importe quelle <br />{" "}
                            monnaie sans frais.{" "}
                          </h4>{" "}
                          <p>
                            {" "}
                            Notre fonctionnalité de budgétisation simple <br />{" "}
                            vous permet de séparer vos <br /> dépenses et de
                            définir des limites réalistes <br /> chaque mois.
                            Cela signifie que vous...{" "}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="">
                  <Card>
                    <CardContent className="flex  items-center justify-center ">
                    <div className="article ">
                        <img src="./images/image-restaurant.jpg" alt="" />
                        <div className="content">
                          <h4>
                            {" "}
                            Recevez de l'argent dans n'importe quelle <br />{" "}
                            monnaie sans frais.{" "}
                          </h4>{" "}
                          <p>
                            {" "}
                            Notre fonctionnalité de budgétisation simple <br />{" "}
                            vous permet de séparer vos <br /> dépenses et de
                            définir des limites réalistes <br /> chaque mois.
                            Cela signifie que vous...{" "}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="">
                  <Card>
                    <CardContent className="flex  items-center justify-center ">
                      <div className="article">
                        <img src="./images/image-plane.jpg" alt="" />
                        <div className="content">
                          <h4>
                            {" "}
                            Emportez votre carte Easybank <br /> partout où vous
                            allez.{" "}
                          </h4>{" "}
                          <p>
                            {" "}
                            Nous voulons que vous profitiez de vos voyages.{" "}
                            <br /> C'est pourquoi nous ne facturons aucun <br />{" "}
                            frais sur les achats pendant que vous êtes <br /> à
                            l'étranger. Nous vous montrerons même...{" "}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute  left-[15%] z-40 top-[40%] bg-red-900 text-black" />
            <CarouselNext className="absolute    bg-red-900 right-[15%] z-40 top-[40%] text-black" />
          </Carousel>
        </section>
      </div>
      
    </div>
  );
};

export default HomePage;
