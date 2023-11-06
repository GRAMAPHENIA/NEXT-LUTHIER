import Image from "next/image";

export default function Marcas() {
  return (
    <section className="grid grid-cols-3 lg:grid-cols-6 w-full gap-2 text-center">
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Inicio</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Instrumentos</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Restauración</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Nosotros</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Reparaciones</p>
      </div>
      <div className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]">
        <p>Contactos</p>
      </div>
    </section>
  );
}
