import Marquee from "react-fast-marquee";
import InfoCard from "@/components/InfoCard";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const Ticker = () => {
  return (
    <section className="space-y-6 py-8 sm:py-12 lg:py-20">
      <div className="container text-center">
        <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl mb-4 sm:mb-6 lg:mb-8">
            Why{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#714DFF] via-[#9C83FF] to-[#E151FF] to-45%">
              UzOFin?
            </span>
          </h2>
          <p className="mb-8 lg:mb-16 lg:px-44">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
        </AnimateOnView>
      </div>
      <div className=" space-y-2 lg:space-y-6">
        <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
          <Marquee loop={0} speed={100}>
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
          </Marquee>
          <Marquee loop={0} speed={100} direction="right">
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
          </Marquee>
          <Marquee loop={0} speed={100}>
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Developer-Friendly APIs"
              description="Build, integrate, and launch faster."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
            <InfoCard
              title="Unified Dashboard"
              description="Manage banking, payments, and merchants in one place."
            />
            <InfoCard
              title="AI-Driven Decisions"
              description="Automate approvals, verification, and financial operations."
            />
          </Marquee>
        </AnimateOnView>
      </div>
    </section>
  );
};

export default Ticker;
