import Image from "next/image";

import Pua from "../../public/pua.svg";
import Instagram from "../../public/instagram.svg";
import Youtube from "../../public/youtube.svg";
import Email from "../../public/email.svg";

export default function Header() {
  return (
    <header className="grid grid-cols-4 bg-[#14181b] p-4 rounded-full items-center w-full">
      <h1 className="">
        <Image
          className="text-center"
          src={Pua}
          alt="Pua de guitarra"
          width="30"
          height="30"
        />
      </h1>
      <div className="flex col-start-4 col-end-5 justify-end gap-4">
        <Image
          className="text-center"
          src={Instagram}
          alt="logo de instagram"
          width="30"
          height="30"
        />
        <Image
          width="30"
          height="30"
          className="text-center"
          src={Youtube}
          alt="logo de youtube"
        />
        <Image
          width="30"
          height="30"
          className="text-center"
          src={Email}
          alt="logo de email"
        />
      </div>
    </header>
  );
}
