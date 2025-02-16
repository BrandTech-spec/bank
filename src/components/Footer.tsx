import { useUserStore } from "@/actions/zustand/userState"
import { FooterProps } from "@/types"



const Footer = ({  type = 'desktop' }: FooterProps) => {


  const handleLogOut = async () => {

  }

  const user = useUserStore((state)=> state.user)
  const reSetUser = useUserStore((state)=> state.reSetUser)
  return (
    <footer onClick={()=> reSetUser()} className="footers">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl uppercase font-bold text-gray-700">
        {user?.firstName[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
          <h1 className="text-14 truncate text-gray-700 font-semibold">
            {user?.firstName}
          </h1>
          <p className="text-14 max-md:hidden truncate font-normal text-gray-600">
            {user?.email}
          </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <img src="icons/logout.svg"  alt="jsm" />
      </div>
    </footer>
  )
}

export default Footer