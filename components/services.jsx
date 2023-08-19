import React from "react";
import Container from "./ui/container";
import { Bus, BusFront, Car, MoveRight, Plane, Shield, TowerControl, Truck } from "lucide-react";
import Link from "next/link";

const Services = () => {
  return (
    <Container classname="lg:py-10 py-5 flex flex-col lg:gap-0 gap-4">
      <div className="text-white flex flex-col items-center gap-4">
        <h5 className="text-small flex gap-3 text-dark-blue-100 bg-[#eaeaea] px-4 py-2 rounded-3xl w-fit">
          Our Charter Services
        </h5>
        <h2 className="text-[46px] text-center font-bold leading-[60px] text-dark-blue">
          We Provide&nbsp;
          <span className="inline-flex relative">
            <span className="z-40">Best Services</span>
            <span className="absolute w-full z-20 left-0 bottom-0 bg-primary-green h-[15px] mb-[5px]" />
          </span>
          &nbsp;For You
        </h2>
      </div>
      <div className="lg:mt-8 mt-4 md:grid md:grid-cols-12 lg:gap-8 flex lg:flex-row flex-col gap-4">
        <div className="group px-8 lg:py-14 py-8 lg:mt-12 mt-0 lg:h-fit bg-white hover:bg-primary-green cursor-pointer shadow-booking lg:col-span-4 md:col-span-6 rounded-xl flex flex-col items-start gap-5">
          <span className="text-primary-green group-hover:text-white">
            <Car size={40} />
          </span>
          <h4 className="text-2xl font-bold group-hover:text-white">Corporate/Executive Travel</h4>
          <p className="text-md text-[#616161] group-hover:text-[#ededed]">
          Whether you're en route to a crucial business luncheon, attending a significant conference, traveling independently, or accompanied by a team of colleagues, rest assured that our corporate transportation service is poised to leave a memorable mark.
          </p>
          <button className="text-primary-green group-hover:text-white text-sm font-medium">
            <Link href="/services/executive-travel" className="flex gap-2 items-center justify-center">
                Read More
                <MoveRight size={15} />
            </Link>
          </button>
        </div>
        <div className="bg-primary-green lg:h-fit text-white lg:col-span-4 md:col-span-6 rounded-xl px-8 lg:py-14 py-8 flex flex-col items-start gap-5">
          <span className="text-white">
            <Truck size={35} />
          </span>
          <h4 className="text-2xl font-bold">Home Moving Service</h4>
          <p className="text-md text-[#ededed]">
          Whether you're moving goods for business or personal purposes, our charter logistics service provides a versatile and efficient option. With a range of truck sizes available, we can accommodate various cargo volumes and requirements, ensuring your shipments reach their destination securely and on time.
          </p>
          <button className="text-white text-sm font-medium">
            <Link href="/services/home-movers" className="flex gap-2 items-center justify-center">
                Read More
                <MoveRight size={15} />
            </Link>
          </button>
        </div>
        <div className="group px-8 lg:py-14 py-8 lg:mt-12 mt-0 lg:h-fit bg-white hover:bg-primary-green cursor-pointer shadow-booking lg:col-span-4 md:col-span-12 rounded-xl flex flex-col items-start gap-5">
          <span className="text-primary-green group-hover:text-white">
            <Bus size={40} />
          </span>
          <h4 className="text-2xl font-bold group-hover:text-white">Charter Bus Service</h4>
          <p className="text-md text-[#616161] group-hover:text-[#ededed]">
          We present the utmost in professional charter and shuttle buses, tailored to suit any event, whether it's for business or leisure. Our service is capable of accommodating groups of any size, ensuring seamless transportation for all travelers.
          </p>
          <button className="text-primary-green group-hover:text-white text-sm font-medium">
            <Link href="/services/charter-bus-service" className="flex gap-2 items-center justify-center">
                Read More
                <MoveRight size={15} />
            </Link>
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-12 lg:gap-8 flex lg:flex-row flex-col gap-4">
      <div className="group px-8 lg:py-14 py-8 lg:mt-12 mt-0 lg:h-fit bg-white hover:bg-primary-green cursor-pointer shadow-booking lg:col-span-4 md:col-span-6 rounded-xl flex flex-col items-start gap-5">
          <span className="text-primary-green group-hover:text-white">
            <Plane size={40} />
          </span>
          <h4 className="text-2xl font-bold group-hover:text-white">Airport Travel</h4>
          <p className="text-md text-[#616161] group-hover:text-[#ededed]">
            Airport shuttle service provides a hassle-free means to transfer your visitors and guests between locations. At your request, we proficiently manage discreet and secure transportation to and from any destination.
          </p>
          <button className="text-primary-green group-hover:text-white text-sm font-medium">
            <Link href="/services/airport-travel" className="flex gap-2 items-center justify-center">
                Read More
                <MoveRight size={15} />
            </Link>
          </button>
        </div>
        <div className="group px-8 lg:py-14 py-8 lg:h-fit bg-white hover:bg-primary-green cursor-pointer shadow-booking lg:col-span-4 md:col-span-6 rounded-xl flex flex-col items-start gap-5">
          <span className="text-primary-green group-hover:text-white">
            <TowerControl size={40} />
          </span>
          <h4 className="text-2xl font-bold group-hover:text-white">Funeral Transportation</h4>
          <p className="text-md text-[#616161] group-hover:text-[#ededed]">
          Our funeral transportation service is designed with sensitivity and respect, providing a dignified conveyance for mourners to pay their final respects and gather in remembrance. We understand the importance of this moment.
          </p>
          <button className="text-primary-green group-hover:text-white text-sm font-medium">
            <Link href="/services/funeral-transportation" className="flex gap-2 items-center justify-center">
                Read More
                <MoveRight size={15} />
            </Link>
          </button>
        </div>
        <div className="group px-8 lg:py-14 py-8 lg:mt-12 mt-0 lg:h-fit bg-white hover:bg-primary-green cursor-pointer shadow-booking lg:col-span-4 md:col-span-12 rounded-xl flex flex-col items-start gap-5">
          <span className="text-primary-green group-hover:text-white">
            <BusFront size={40} />
          </span>
          <h4 className="text-2xl font-bold group-hover:text-white">Wedding Transportation</h4>
          <p className="text-md text-[#616161] group-hover:text-[#ededed]">
          Whether your preference is private transportation for the bride and groom or spacious conveyance for the entire wedding party, we have precisely the solution you're seeking.
          </p>
          <button className="text-primary-green group-hover:text-white text-sm font-medium">
            <Link href="/services/wedding-transportation" className="flex gap-2 items-center justify-center">
                Read More
                <MoveRight size={15} />
            </Link>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Services;
