import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  alt: string;
};

type LogoSectionProps = {
  logos: Logo[];
};

const LogoSection: React.FC<LogoSectionProps> = ({ logos }) => {
  return (
    <div className="flex justify-center gap-3 md:gap-10 items-center flex-wrap">
      {logos.map((logo) => (
        <div key={logo.name} className="flex justify-center items-center px-2 sm:px-4">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={90}
            height={40}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoSection;
