import HeroSection from "./home/HeroSection";
import PopularPackage from "./home/PopularPackage";
import SearchBar from "./home/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="relative">
        <HeroSection />
        <div className="absolute -bottom-24 left-0 w-full h-ful">
          <SearchBar />
        </div>
      </div>

      <div className="mt-32">
        <PopularPackage />
      </div>
    </div>
  );
}
