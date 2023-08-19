import Image from "next/image"
const ExpertiseBox = ({icon, title, description}) => {
  return (
    <div className="flex flex-row items-start gap-4 bg-[#2026361c] p-4">
        <div className="bg-[#2026361c] p-2 rounded-full w-[30px] h-[30px] flex justify-center items-center ">
            <Image src="/assets/term.svg" width={15} height={15} className="" alt="Delivery" />
        </div>
            
        <div className="">
            <h4 className="text-base text-black font-semibold">{title}</h4>
            <p className="text-sm text-[#5D5F6D] font-medium max-w-[500px]">{description}</p>
        </div>
    </div>
  )
}

export default ExpertiseBox