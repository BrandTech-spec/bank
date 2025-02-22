import { Map, MessageCircle, Phone } from "lucide-react"



const ContactUs = () => {
  return (
    <div className="px-2 py-28 space-y-4 bg-gray-700 text-white w-screen flex flex-col items-start justify-start">
      <h1 className="my-3  font-extrabold text-3xl"> En Europe </h1>
      <div className="flex gap-2 items-center">
        <Map className="text-blue-400"/> <p>303 Valmar Kemah, Texas (TX)</p>
      </div>

      

      <div className="flex gap-2  items-center">
        <MessageCircle className="text-blue-400"/> <p>contactvirement@gmail.com</p>
      </div>
    </div>
  )
}

export default ContactUs