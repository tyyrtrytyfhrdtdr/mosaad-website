import { Hero } from "@/components/store/Hero";
import { Categories } from "@/components/store/Categories";
import { FeaturedProducts } from "@/components/store/FeaturedProducts";
import { WhyMosaad } from "@/components/store/WhyMosaad";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyMosaad />
    </>
  );
}
