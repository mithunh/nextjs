import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import { IoArrowForwardSharp } from "react-icons/io5";

const BookADemo = () => {
  return (
    <section className="book-a-demo-section bg-[url('/book_demo_bg.png')] bg-center bg-contain bg-no-repeat py-12 sm:py-20 lg:py-32 text-center">
      <div className="max-w-4xl m-auto px-5">
        <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl mb-4 sm:mb-6 lg:mb-10 xl:mb-14">
            The future of your industry{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#714DFF] to-[#E151FF] to-45% text-nowrap">
              starts here
            </span>
          </h2>
          <div className="flex justify-center gap-4 lg:gap-8">
            <Button
              variant="primary"
              icon={<IoArrowForwardSharp />}
              iconPosition="right"
            >
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              icon={<IoArrowForwardSharp />}
              iconPosition="right"
            >
              Build AI
            </Button>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
};

export default BookADemo;
