import { AnimateOnView } from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import { IoArrowForwardSharp } from "react-icons/io5";

const Cta = () => {
  return (
    <section className="text-center py-12 lg:py-20 bg-[url('/StartBuilding_001_BG.png')] bg-center bg-contain sm:bg-cover bg-no-repeat">
      <div className="container xl:py-48 space-y-4 lg:space-y-6">
        <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl xl:-mt-36">
            Build Faster with Our Powerful API’s
          </h2>
          <p>
            Plug into secure, developer-friendly financial API’s and launch in
            days—not months.
          </p>
          <Button
            className="m-auto"
            variant="primary"
            icon={<IoArrowForwardSharp />}
            iconPosition="right"
          >
            Start building
          </Button>
        </AnimateOnView>
      </div>
    </section>
  );
};

export default Cta;
