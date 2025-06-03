import React from 'react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-5">
      <img src={icon} alt="icon" className="size-10" />
      <h3 className="flex-1 text-[28px] font-semibold text-[#303236]">{title}</h3>
      <p className="text-[16px] font-light text-[#303236]">{description}</p>
    </div>
  );
};

export default Feature;
