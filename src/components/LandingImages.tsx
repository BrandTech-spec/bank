import { ArrowRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const LandingImages = ({title, general_page, current_page}:{title:string, general_page:string, current_page:string}) => {
  const {pathname} = useLocation()
    const HomeBackground = "./img/bank_icons/business-solution.jpg"
  return (
    <div style={{background:`url("${HomeBackground}")`}} className={`flex text-white bg-appointments   bg-cover bg-no-repeat w-full object-cover h-[200px] flex-col items-center  py-11 ${pathname.includes("home") && "hidden" }`}>
        <div className="border-l-[3px] space-y-3 border-blue-600 px-2">
            <h1 className="lg:text-6xl text-3xl font-bold">{title}</h1>
            <span className="flex items-center text-xs justify-center gap-1">
                <Link className="hover:text-blue-600 hover:underline"  to={"/"}>Home</Link>
                <ArrowRight className="w-3 h-3"/>
                <p>{general_page}</p>
                <ArrowRight className="w-3 h-3"/>
                <p>{current_page}</p>
            </span>
        </div>
    </div>

  )
}

export default LandingImages