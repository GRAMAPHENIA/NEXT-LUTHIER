import Aside from "@/components/Aside.jsx";

export default function Body() {
  return (
    <section className="h-[600px] w-full grid lg:grid-cols-4 p-2 gap-2">
      <figure className="p-4 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl ">
        Cuerpo
      </figure>
      <aside className="p-4 lg:col-start-4 lg:col-end-5 bg-[#14181b] rounded-2xl ">
        <Aside />
      </aside>
    </section>
  );
}
