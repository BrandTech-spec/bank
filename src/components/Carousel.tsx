

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useIntl } from "react-intl";

export function CarouselDemo() {
   const { formatMessage } = useIntl();
  const data = [
    {img:"./img/bank_icons/commercial-solution.jpg", heading:"landingEnglishOption1Heading", content:"landingEnglishOption1Content"},
    {img:"./img/bank_icons/business-solution.jpg", heading:"landingEnglishOption2Heading", content:"landingEnglishOption2Content"},
    {img:"./img/bank_icons/personal-solutions.jpg", heading:"landingEnglishOption3Heading", content:"landingEnglishOption3Content"},
  ]
      const HomeBackground = "./img/bank_icons/business-solution.jpg"
  return (
    <Carousel className="w-full overflow-hidden relative  z-0 h-auto ">
      <CarouselContent className="w-[400px] lg:w-[90%] z-0 h-[400px]">
        {data.map((card, index) => (
          <CarouselItem className="" key={index}>
            <div className="p-1">
              <Card style={{background:`linear-gradient(rgba(52, 137, 235,0.0),rgba(52, 137, 235,0.9)),url("${card.img}")`}} className={`flex text-white  bg-appointments   bg-cover bg-no-repeat w-full object-cover flex-col items-start justify-end  py-2`}>
                <CardContent className="flex  mt-20  flex-col aspect-square items-start gap-4 justify-center p-6">
                 <h1 className="font-extrabold text-3xl">{formatMessage({ id:card.heading})} </h1>
                 <p className="text-xs font-mono w-80">{formatMessage({ id:card.content})} </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10 bg-white p-6" />
      <CarouselNext className="absolute right-10 bg-white p-6" />
    </Carousel>
  )
}

