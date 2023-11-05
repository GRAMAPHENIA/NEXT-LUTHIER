import Image from "next/image";

export default function Marcas() {
  return (
    <section className="grid grid-cols-3 lg:grid-cols-6 px-2 w-full gap-2 text-center">
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <p>Diliberto</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <p>Goto</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <p>Wilkinson</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <p>Hosco</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <p>Cts</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full">
        <p>Dimarcio</p>
      </div>
    </section>
  );
}
