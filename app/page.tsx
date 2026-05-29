// import Image from "next/image";

import Background from "@/components/Background";
import Billboard from "@/components/Billboard";
import Concrete_ground from "@/components/Concrete_ground";
import Rail_con_bushes from "@/components/Rail_con_bushes";
import Stations from "@/components/Stations";
import Train from "@/components/Train";
import Trees_b from "@/components/Trees_b";
import Trees_f from "@/components/Trees_f";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Background />
      <Stations />
      <Trees_b />
      <Billboard />
      <Concrete_ground />
      <Train />
      <Rail_con_bushes />
      <Trees_f />
    </div>
  );
}
