import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Presentacion() {
  return (
    <>
      <Image
        className=""
        src={Logo}
        alt="Logo de dicorato luthier"
        width="300"
        height="auto"
      />
      <h1 className="text-2xl text-white sm:text-4xl lg:text-6xl p-10">
        recursos nativos,
        <br />
        el cuidado del medio ambiente,
        <br />
        <span className="text-[#a4adb7]">
          selección de maderas recuperadas
        </span>
        .
      </h1>
    </>
  );
}