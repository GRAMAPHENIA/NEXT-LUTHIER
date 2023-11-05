import Image from "next/image";

import Pua from "../../public/pua.svg";

export default function Figure() {
  return (
    <figure>
      <Image width="30" height="auto" src={Pua} alt="imagen de luthier" />
    </figure>
  );
}
