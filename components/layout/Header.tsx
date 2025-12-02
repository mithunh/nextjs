import Image from "next/image";
import Nav from "./Nav";
import Button from "@/components/ui/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/uzofin_logo.svg"
            alt="UzoFin Logo"
            width={114}
            height={40}
            className="object-contain"
          />
        </Link>
        <Nav />
        <Button
          variant="primary"
          icon={<IoArrowForwardSharp />}
          iconPosition="right"
          className="hidden lg:flex"
        >
          Start building
        </Button>
      </div>
    </header>
  );
};

export default Header;
