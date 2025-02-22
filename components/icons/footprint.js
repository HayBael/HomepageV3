import { DiLinux } from "react-icons/di";

const FootprintIcon = (props) => {
  return (
    <DiLinux
      size={20}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      {...props}
    />
  );
};

export default FootprintIcon;
