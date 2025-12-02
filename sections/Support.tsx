import Button from "@/components/ui/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import { LuCircleCheckBig } from "react-icons/lu";
import MaterialYouSlider from "@/components/MaterialYouSlider";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const Support = () => {
  const slides = [
    { title: "Digital Payments", imageUrl: "/dp_img.png" },
    { title: "Neo Bank", imageUrl: "/nb_img.png" },
    { title: "AI-Powered Lending", imageUrl: "/apl_img.png" },
    { title: "Merchant Onboard", imageUrl: "/mo_img.png" },
    { title: "Insurtech Products", imageUrl: "/ip_img.png" },
  ];

  return (
    <section className="support-section py-12 2xl:py-20 bg-black/50 relative z-10 overflow-hidden">
      <div className="container">
        <div className="flex-col-reverse flex 2xl:items-end 2xl:flex-row gap-10 sm:gap-20 2xl:gap-6">
          <div className="basis-1/3 space-y-4 lg:space-y-6 2xl:space-y-10">
            <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
              <span className="text-[#37CCF7] text-lg lg:text-4xl">
                24/7 support
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl">
                Industry Standard
              </h2>
              <ul className="space-y-2.5 lg:space-y-4 xl:space-y-8 mb-10">
                <li className="flex items-center gap-4 lg:text-xl xl:text-3xl">
                  <LuCircleCheckBig stroke="#37CCF7" /> Modern & clean design
                </li>
                <li className="flex items-center gap-4 lg:text-xl xl:text-3xl">
                  <LuCircleCheckBig stroke="#37CCF7" /> Easy to customize
                </li>
                <li className="flex items-center gap-4 lg:text-xl xl:text-3xl">
                  <LuCircleCheckBig stroke="#37CCF7" /> Scalability &
                  Integration
                </li>
                <li className="flex items-center gap-4 lg:text-xl xl:text-3xl">
                  <LuCircleCheckBig stroke="#37CCF7" /> Step-by-step guide
                </li>
                <li className="flex items-center gap-4 lg:text-xl xl:text-3xl">
                  <LuCircleCheckBig stroke="#37CCF7" /> SaaS based solution
                </li>
              </ul>
              <Button
                variant="primary"
                icon={<IoArrowForwardSharp />}
                iconPosition="right"
              >
                Start building
              </Button>
            </AnimateOnView>
          </div>
          <div className="basis-2/3 space-y-2.5">
            <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
              <div className="relative text-center">
                <div className="bg-[url('/laptop_frame.svg')] bg-center bg-contain bg-no-repeat h-[600px] w-[980px] mix-blend-multiply m-auto hidden lg:block"></div>
                <div className="bg-[#231F55] bg-linear-to-t to-[#6D178C] from-[#2B1560]/1 lg:absolute top-[18px] m-auto left-0 right-0 bottom-[78px] lg:w-[780px] lg:h-[504px] rounded-2xl lg:rounded-bl-none lg:rounded-br-none p-4">
                  <MaterialYouSlider
                    slides={slides}
                    slidesPerView={3}
                    spaceBetween={20}
                  />
                </div>
              </div>
            </AnimateOnView>
            <div className="bg-radial to-[#421F56]/0 from-[#B452FF] w-[2000px] h-[300px] rounded-full absolute blur-[130px] left-1/2 bottom-40 -translate-x-[650px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
