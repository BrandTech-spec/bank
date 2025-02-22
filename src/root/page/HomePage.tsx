import Download from "@/components/sections/Download";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";

const App = () => {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center mx-md:px-3 w-full h-full bg-s1">
    
      <Hero />
      <section className="max-w-[100%]  max-sm:w-[100%] ">
        <Features />
      </section>
      <section className="max-w-[100%] max-sm:w-[100%] ">
        <Faq />
      </section>
      
      <section className="max-w-[100%] max-sm:w-[100%] ">
        <Testimonials />
      </section>
      <section className="max-w-[100%] max-sm:w-[100%] ">
         <Download />
      </section>
     
    </main>
  );
};

export default App;
