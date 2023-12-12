
import Layout from "../components/common/layout";

import Hero from "../components/hero"
import Business from "../components/business";
import Team from "../components/team";
import Features from "../components/features";
import Cta from "../components/cta";
import Path from "../components/path";

export default function Home() {
  return (
    <Layout className="bg-gray-900">
      <Hero />
      <Business />
      <Features/>
      <Path />
      <Team/>
      <Cta/>
    </Layout>
    
  )
}