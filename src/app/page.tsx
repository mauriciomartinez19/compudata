import HeroSection from "./ui/sections/heroSection";
// import SecondSection from "./ui/sections/secondSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection/>
      {/* <SecondSection/> */}
    </main>
  );
}
