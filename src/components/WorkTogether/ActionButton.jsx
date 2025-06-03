import { useMemo } from 'react';

const ActionButton = ({ icon, variant }) => {
  const bgColor = useMemo(() => {
    if (variant === 'important') return 'bg-[#FD5752]';
    return 'bg-[#68686A]';
  }, [variant]);

  return (
    <button
      className={`${bgColor} flex size-11 items-center justify-center rounded-full shadow-[0px_4px_16px_0px_#00000059]`}
    >
      <img src={icon} alt="icon" className="size-5" />
    </button>
  );
};

export default ActionButton;
