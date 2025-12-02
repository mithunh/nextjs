
import Banner from "@/sections/Banner";
import BookADemo from "@/sections/BookADemo";
import Companies from "@/sections/Companies";
import Cta from "@/sections/Cta";
import Main from "@/sections/Main";
import Support from "@/sections/Support";
import Ticker from "@/sections/Ticker";

export default function Home() {
  return (
    
    <>
      <Banner />
      <Companies />
      
      <Main />
      <Ticker />
      <Cta />
      <Support />
      <BookADemo />
      
    </>
  );
}

