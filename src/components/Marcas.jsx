import Image from "next/image";

export default function Marcas() {
  return (
    <section className="grid grid-cols-3 lg:grid-cols-6 w-full gap-2 text-center">
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Diliberto</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Goto</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Wilkinson</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Hosco</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Cts</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Dimarcio</p>
      </div>
    </section>
  );
}
