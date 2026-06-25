import {
  FeatureSpotlights,
  FinalCta,
  Hero,
  Integrations,
  Pipeline,
  Pricing,
  SocialProof,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Pipeline />
      <FeatureSpotlights />
      <Integrations />
      <Pricing />
      <FinalCta />
    </>
  );
}
