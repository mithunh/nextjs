import LogoSection from "@/components/Logos";
import AnimateOnView from "@/components/ui/AnimateOnView";

const logos = [
  { name: "Brave", src: "/brave.svg", alt: "Brave Logo" },
  { name: "Circle", src: "/circle.svg", alt: "Circle Logo" },
  { name: "Discord", src: "/discord.svg", alt: "Discord Logo" },
  { name: "Google", src: "/google.svg", alt: "Google Logo" },
  { name: "Jump", src: "/jump.svg", alt: "Jump Logo" },
  { name: "Apple", src: "/image 7.svg", alt: "Apple Logo" },
  { name: "Magic", src: "/magic.svg", alt: "Magic Logo" },
];

const Companies = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto text-center space-y-8">
        <AnimateOnView direction="up" delay={0.2} stagger={0.2}>
          <h6 className="text-xl uppercase text-skyblue">
            Powering tools and integration for companies around the world
          </h6>
          <div>
            <LogoSection logos={logos} />
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
};

export default Companies;
