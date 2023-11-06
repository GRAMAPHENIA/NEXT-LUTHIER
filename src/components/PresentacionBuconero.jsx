import Image from "next/image";
import Logo from "../../public/info.svg";

export default function Presentacion() {
  return (
    <>
      <h1 className="ml-9">MODELO BUCONERO NATIVA</h1>
      <p className="text-3xl font-light font-sans text-white sm:text-2xl lg:text-3xl p-10">
        A partir de la superstrat, conservando todas sus características, con un
        tacto moderno y una amplia variedad de configuraciones.
        <br /> <br />
        <span className="text-[#7d8c9d]">
          Para músicos de diferentes estilos tanto clásicos como así también
          contemporáneos.
        </span>
        <br /> <br />
        La versión Nativa está construida con la mejor selección de maderas
        regionales, obteniendo así audios distintos y novedosos.
      </p>

      <section className="flex justify-between p-3 bg-[#0e1012] rounded-xl gap-2 ">
        <p className="flex justify-center align-middle p-2 rounded-lg hover:bg-[#20262b] hover:cursor-pointer">
          Más info
        </p>
        <Image
          className="text-[#e1bb49]"
          src={Logo}
          alt="Fotografia de la guitarra electrica Buconero"
          width="40"
          height="auto"
        />
      </section>
    </>
  );
}
