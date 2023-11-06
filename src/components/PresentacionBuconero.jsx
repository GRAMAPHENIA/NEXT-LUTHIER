import Image from "next/image";
import Logo from "../../public/info.svg";

export default function PresentacionBuconero() {
  return (
    <>
      <p className="text-3xl font-light font-sans text-[#7d8c9d] mb-5 sm:text-2xl lg:text-7xl p-6 lg:p-10">
        {/* <span className="text-white">Buconero nativa</span> se construye a
        partir de la superstrat, conservando todas sus características, con un
        tacto moderno y una amplia variedad de configuraciones.{" "} */}
        <span className="text-white">
          Galeria</span> para músicos de estilo clásico o contemporáneo.
        {" "}
        {/* La versión Nativa, está construida con la mejor selección de maderas
        regionales, poseyendo así audios distintos y novedosos. */}
      </p>

      <section className="flex w-[150px] justify-center p-3 ml-8 bg-[#101112] hover:bg-[#20262b] rounded-xl gap-2 ">
        <p>ver galeria</p>
        {/* <Image src={Logo} alt="logo" width="40" height="auto" /> */}
      </section>
    </>
  );
}
