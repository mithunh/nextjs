import StatCard from "@/components/StatCard";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import Image from "next/image";

const Main = () => {
  return (
    <main className="py-12 sm:py-16 xl:py-44 bg-[url('/lighting_bg_left.png'),url('/lighting_bg_right.png')] lg:bg-position-[left_top,right_top] bg-contain bg-no-repeat lg:bg-fixed">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-36">
          <div className="lg:order-2 space-y-6 lg:space-y-12">
            <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
              <article>
                <h2 className="text-transparent bg-clip-text bg-linear-to-r from-[#8C01FA] to-[#19FB9B] to-45% text-4xl sm:text-6xl xl:text-8xl mb-2">
                  11.5M+
                </h2>
                <h4 className="uppercase text-gray-light">
                  Transactions processed monthly
                </h4>
              </article>
              <article>
                <h2 className="text-transparent bg-clip-text bg-linear-to-r from-[#00BCD4] to-[#0047FF] to-45% text-4xl sm:text-6xl xl:text-8xl  mb-2">
                  99.9%
                </h2>
                <h4 className="uppercase text-gray-light">
                  Platform uptime and reliability
                </h4>
              </article>
              <article>
                <h2 className="text-transparent bg-clip-text bg-linear-to-r from-[#025B8C] to-[#00FFBD] to-45% text-4xl sm:text-6xl xl:text-8xl mb-2">
                  70% Faster
                </h2>
                <h4 className="uppercase text-gray-light">
                  Merchant onboarding with AI automation
                </h4>
              </article>
            </AnimateOnView>
          </div>
          <div className="lg:order-1 pb-12 xl:pb-24">
            <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
              <h3 className="text-2xl sm:text-3xl xl:text-4xl xl:pr-20">
                Your Business Pays Are Now Faster and Secure
              </h3>
              <Image
                src="/animated_globe.png"
                alt="Main Image"
                width={600}
                height={400}
                className="mt-8"
              />
            </AnimateOnView>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="basis-2/5 space-y-2.5 ">
            <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
              <h3 className="text-2xl sm:text-4xl xl:text-5xl lg:pr-20 leading-tight">
                Our Intelligent Financial Suite
              </h3>
              <p className="max-w-80 relative pl-3">
                <span className="h-1 w-1 block rounded-full absolute top-2 left-0.5 bg-skyblue"></span>
                Tools that accelerate every step of your financial workflow.
              </p>
            </AnimateOnView>
          </div>
          <div className="basis-3/5">
            <div className="grid gap-4 md:grid-cols-2 md:gap-x-5 md:gap-y-10">
              <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
                <StatCard
                  title="AI Banking"
                  description="Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations."
                  stat={3969}
                  statLabel="Transactions per second"
                  borderColor="border-skyblue"
                  color="bg-skyblue"
                />
                <StatCard
                  title="Payments"
                  description="Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease."
                  stat={1675}
                  statLabel="Validator nodes"
                  borderColor="border-yellow"
                  color="bg-yellow"
                />
                <StatCard
                  title="Payouts"
                  description="Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements."
                  stat={163077581394}
                  statLabel="Total transactions"
                  borderColor="border-purple"
                  color="bg-purple"
                />
                <StatCard
                  title="Merchant Onboarding"
                  description="Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes."
                  stat={100 + "%"}
                  statLabel="On-time merchant Onboard"
                  borderColor="border-green-500"
                />
              </AnimateOnView>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
