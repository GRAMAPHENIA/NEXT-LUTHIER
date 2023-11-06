import Image from "next/image";
import Logo from "../../public/info.svg";

export default function PresentacionBuconero() {
  return (
    <>
      <p className="text-3xl font-light font-sans text-[#7d8c9d] mb-5 sm:text-2xl lg:text-5xl p-6 lg:p-10">
        <span className="text-white">Buconero nativa</span> se construye a
        partir de la superstrat, conservando todas sus características, con un
        tacto moderno y una amplia variedad de configuraciones.{" "}
        <span className="text-white">
          Para músicos de estilos clásicos o contemporáneos.
        </span>{" "}
        La versión Nativa, está construida con la mejor selección de maderas
        regionales, poseyendo así audios distintos y novedosos.
      </p>

      <section className="flex w-[50px] justify-center p-3 bg-[#0e1012] hover:bg-[#20262b] rounded-xl gap-2 ">
        <Image src={Logo} alt="logo" width="40" height="auto" />
      </section>
    </>
  );
}
