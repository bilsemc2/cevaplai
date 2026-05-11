import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Channels from "@/components/Channels";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import BetaForm from "@/components/BetaForm";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <HowItWorks />
      <Features />
      <Channels />
      <UseCases />
      <FAQ />
      <BetaForm />
    </main>
  );
}
