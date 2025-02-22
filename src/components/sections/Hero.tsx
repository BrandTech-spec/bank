import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../home_page/Button";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate()

  const navigation = ()=>{
    navigate("/sign-in")
  }

  return (
    <section className=" pt-60 pb-40 max-lg:pt-52   lg:pb-36 max-md:pt-36 ">
      <Element name="hero">
        <div className="container px-3">
          <div className="relative text-gray-50 px-3 z-2  max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button  onClick={ ()=> navigation()}  icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          <div style={{background:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${"./herro.jpg"})` }} className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] bg-opacity-25  pointer-events-none hero-img_res">
            <img
              src="./herro.jpg"
              className="size-1230   max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
