import React from "react";
import Button from "./button";

const Heading = ({
  subtitle,
  beforeText,
  text,
  afterText,
  desc,
  label,
  href,
  classname,
  textBg,
  pClass
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h6 className="text-small text-primary-green">{subtitle}</h6>
        <h2 className="lg:text-[45px] text-[30px] font-bold lg:leading-[55px] leading-[44px]">
          {beforeText}&nbsp;
          <span className="inline-flex relative">
            <span className="z-40">{text}</span>&nbsp;
            <span className={`absolute w-full z-20 left-0 bottom-0 ${textBg} bg-primary-green h-[15px] mb-[5px] `} />
          </span>
          {afterText}
        </h2>
      </div>
      {desc && 
      <p className={`text-sm max-w-[450px] ${pClass}`}>
        {desc}
      </p>
      }
      <div>

      {label &&
                <Button 
                  label={label}
                  href={href}
                  classname={classname}
                />          
                }
      </div>
    </div>
  );
};

export default Heading;
