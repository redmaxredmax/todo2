import { Card } from "@/_components/card";
import {getData} from "@/service/todo"
import { Form } from "@/_components/form";

export default async function Home() {
  const data = await getData();
  
  
  return <div className="pt-5 bg-blue-100">
    <Form/>
    {data.map((item)=>(
      <Card {...item} key={item.id}/>
    ))}
  </div>;
}
