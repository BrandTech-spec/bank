import { Link } from "react-router-dom";

const PageFooter = () => {
  const footerLinks = [
    {
      title: "Links",
      links: [
        { name: "Maison", link: "/home" },
        { name: "A Propos", link: "/about" },
        { name: "Personnel", link: "/" },
        { name: "contact", link: "/" },
        
        
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
  return (
    <footer className="w-full h-auto py-8 px-2 mt-8 footer text-white">
   
        <div className="flex max-md:flex-col mt-8 w-full justify-between items-center">
          <div className="lg:w-1/4 w-full max-md:px-10">
            <Link
              to="/home"
              className="mb-12 z-50 cursor-pointer flex-col text-white flex items-center gap-2"
            >
              <img
                src="./icons/logo.svg"
                alt="Horizon logo"
                className="size-[48px] w-48 h-48 max-xl:size-14"
              />
              <h1 className="sidebar-logo">Horizon</h1>
            </Link>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              {/*socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))*/}
            </div>
          </div>

          <div className="flex flex-1 lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
    
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={""}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default PageFooter;
