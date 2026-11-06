import { About } from "@/components/About";
import { BlueThread } from "@/components/BlueThread";
import { ContactFooter } from "@/components/ContactFooter";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <div className="relative blue-thread-scope">
        <BlueThread />
        <Hero />
        <Services />
        <Statement />
        <Work />
        <About />
      </div>
      <ContactFooter />
    </main>
  );
}
