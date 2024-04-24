import { Card } from "@/components/card";
import { getData } from "@/service/todo";
import { Form } from "@/components/form";

export default async function Home() {
  const data = await getData();

  return (
    <div className="py-[50px]">
      <div className="w-[800px] mx-auto bg-white p-10 rounded-xl">
        <h1 className="text-center mb-5 font-bold text-3xl text-blue-700">Todo List</h1>
        <div className="mb-5">
          <Form />
        </div>
        {data.map((item) => (
          <Card  {...item} key={item.id} />
        )).reverse()}
      </div>
    </div>
  );
}
