import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import { IoArrowForwardSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="banner bg-[url('/top_dec_left.png'),url('/top_dec_right.png')] bg-position-[left_top,right_top] bg-cover sm:bg-size-[300px] md:bg-size-[400px] lg:bg-size-[500px] 2xl:bg-contain bg-no-repeat 2xl:pt-72 md:pt-48 pt-32 pb-10 sm:pb-24 text-center text-white">
      <div className="container">
        <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-12 xl:px-20 m-auto leading-tight">
            AI-powered{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00FFF3] to-[#AB5EFF] font-medium">
              Banking & Payment Solutions
            </span>{" "}
            built for Modern Businesses
          </h1>
          <p className="mb-6 md:mb-12 xl:max-w-1/2 m-auto text-white">
            UzOfin brings intelligent automation, real-time payments, and
            seamless financial operations together so you can scale without
            friction.
          </p>
          <div className="sm:flex sm:justify-center sm:gap-8">
            <Button
              className="m-auto min-w-52 sm:min-w-auto sm:m-0 mb-4 sm:mb-0"
              variant="primary"
              icon={<IoArrowForwardSharp />}
              iconPosition="right"
            >
              Start building
            </Button>
            <Button
              className="m-auto min-w-52 sm:min-w-auto sm:m-0 mb-4 sm:mb-0"
              variant="secondary"
              icon={<IoArrowForwardSharp />}
              iconPosition="right"
            >
              Read Docs
            </Button>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
};

export default Banner;
