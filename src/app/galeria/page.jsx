export default function Galeria() {
  return (
    <section className="mx-2 lg:mx-10 my-2">
      <section className=" mb-2 gap-2 grid grid-rows-6 grid-cols-2 lg:mx-15 lg:grid-cols-4 ">
        <figure className="p-4 row-start-1 row-end-3 col-start-1 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          1
        </figure>

        <figure className="p-4 lg:col-start-2 lg:col-end-3 bg-[#14181b] rounded-2xl">
          2
        </figure>

        <figure className="p-4 lg:col-start-3 lg:col-end-4 bg-[#14181b] rounded-2xl">
          3
        </figure>

        <figure className="p-4 row-start-4 row-end-6 col-start-1 col-end-2 lg:row-start-1 lg:row-end-7 lg:col-start-4 lg:col-end-5 bg-[#14181b] rounded-2xl">
          4
        </figure>

        <figure className="p-4 row-start-4 row-end-6 col-start-2 col-end-3 lg:row-start-4 lg:row-end-7 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          5
        </figure>

        <figure className="p-4 row-start-8 row-end-9 col-start-1 col-end-3 lg:row-start-2 lg:row-end-7 lg:col-start-2 lg:col-end-4 bg-[#14181b] rounded-2xl">
          6
        </figure>
      </section>

      <section className=" gap-2 grid grid-rows-3 grid-cols-3 lg:grid-cols-4 ">
        <figure className="p-4 row-start-1 row-end-6 col-start-1 col-end-2 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          A
        </figure>

        <figure className="p-4 row-start-1 row-end-6 col-start-2 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-4 lg:col-end-6 bg-[#14181b] rounded-2xl">
          B
        </figure>

        <figure className="p-4 row-start-1 row-end-6 col-start-3 col-end-4 lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-4 bg-[#14181b] rounded-2xl">
          C
        </figure>
      </section>

      <section className="mt-2 gap-2 grid grid-rows-1 grid-cols-3 lg:grid-cols-4 ">
        <figure className="p-4 row-start-1 row-end-2 col-start-1 col-end-2 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          A
        </figure>

        <figure className="p-4 row-start-1 row-end-2 col-start-2 col-end-3 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4 bg-[#14181b] rounded-2xl">
          B
        </figure>

        <figure className="p-4 row-start-1 row-end-2 col-start-3 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-4 lg:col-end-6 bg-[#14181b] rounded-2xl">
          C
        </figure>
      </section>
    </section>
  );
}
