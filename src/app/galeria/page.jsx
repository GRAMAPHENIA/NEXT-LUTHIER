import Image from "next/image";
import Link from "next/link";

export default function Galeria() {
  return (
    <section className="px-2 lg:px-24 pt-2">
      <article className=" gap-2 grid grid-rows-4 grid-cols-3 lg:mx-15 lg:grid-cols-3 ">
        <figure className="p-4 row-start-1 row-end-2 col-start-1 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          <Link
            href="/"
            className="absolute top-5 left-5 lg:left-28 text-xl text-center w-[55px] px-4 py-3 border-2 border-[#393c40]  hover:bg-[#20262b] rounded-full"
          >
            ↩
          </Link>
        </figure>
        <figure className="p-4 row-start-1 row-end-2 col-start-1 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          <h1>1</h1>
          <p>modelo</p>
        </figure>
        <figure className="p-4 row-start-2 row-end-3 col-start-1 col-end-4 lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-[#14181b] rounded-2xl">
          <h1>2</h1>
          <p>modelo</p>
        </figure>
        <figure className="p-4 row-start-3 row-end-4 col-start-1 col-end-4 lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-4 bg-[#14181b] rounded-2xl">
          <h1>3</h1>
          <p>modelo</p>
        </figure>
        <figure className=" p-4 row-start-4 row-end-5 col-start-1 col-end-4 lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl">
          <h1>4</h1>
          <p>modelo</p>
        </figure>
        <figure className=" p-4 row-start-5 row-end-6 col-start-1 col-end-4 lg:row-start-5 lg:row-end-6 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl">
          <h1>5</h1>
          <p>modelo</p>
        </figure>
        <figure className=" p-4 row-start-6 row-end-7 col-start-1 col-end-4 lg:row-start-6 lg:row-end-7 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl">
          <h1>6</h1>
          <p>modelo</p>
        </figure>
      </article>

      <article className="mt-2 gap-2 grid grid-rows-4 grid-cols-3 lg:mx-15 lg:grid-cols-3 ">
        <figure className="p-4 row-start-1 row-end-2 col-start-1 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          <Link
            href="/"
            className="absolute top-5 left-5 lg:left-28 text-xl text-center w-[55px] px-4 py-3 border-2 border-[#393c40]  hover:bg-[#20262b] rounded-full"
          >
            ↩
          </Link>
        </figure>
        <figure className="p-4 row-start-1 row-end-2 col-start-1 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          <h1>7</h1>
          <p>modelo</p>
        </figure>
        <figure className="p-4 row-start-2 row-end-3 col-start-1 col-end-4 lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-[#14181b] rounded-2xl">
          <h1>8</h1>
          <p>modelo</p>
        </figure>
        <figure className="p-4 row-start-3 row-end-4 col-start-1 col-end-4 lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-4 bg-[#14181b] rounded-2xl">
          <h1>9</h1>
          <p>modelo</p>
        </figure>
        <figure className=" p-4 row-start-4 row-end-5 col-start-1 col-end-4 lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl">
          <h1>10</h1>
          <p>modelo</p>
        </figure>
        <figure className=" p-4 row-start-5 row-end-6 col-start-1 col-end-4 lg:row-start-5 lg:row-end-6 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl">
          <h1>11</h1>
          <p>modelo</p>
        </figure>
        <figure className=" p-4 row-start-6 row-end-7 col-start-1 col-end-4 lg:row-start-6 lg:row-end-7 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl">
          <h1>12</h1>
          <p>modelo</p>
        </figure>
      </article>
    </section>
  );
}
