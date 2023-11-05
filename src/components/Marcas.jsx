import Image from "next/image";
import Figure from "@/components/Figure.jsx";

export default function Marcas() {
  return (
    <section className="grid grid-cols-5 px-2 w-full gap-2 text-center">
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <Figure />
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <Figure />
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <Figure />
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <Figure />
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <Figure />
      </div>
    </section>
  );
}
