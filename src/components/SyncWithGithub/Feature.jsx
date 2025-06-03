import React from 'react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <img src={icon} alt={title} className="h-10 shrink-0" />
      <h3 className="flex-1 text-[32px] leading-[1] font-medium text-white">{title}</h3>
      <p className="text-sm text-[#95979E]">{description}</p>
    </div>
  );
};

export default Feature;
