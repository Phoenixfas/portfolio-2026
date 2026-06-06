// import Image from "next/image";

import Background from "@/components/Background";
import Billboard_b from "@/components/Billboard_b";
import Billboard_f from "@/components/Billboard_f";
import Concrete_ground from "@/components/Concrete_ground";
import Line from "@/components/Line";
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
      <Billboard_b />
      <Concrete_ground />
      <Line />
      <Train />
      <Rail_con_bushes />
      <Billboard_f />
      <Trees_f />
    </div>
  );
}
