import Header from "@/components/shared/Header";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      receipt: "1.jpg",
      vendor: "Vendor 1",
      line_item: "{key: value}",
      total_cost: 49.9,
      amount_category: 50,
    },
    {
      receipt: "2.jpg",
      vendor: "Vendor 2",
      line_item: "{key: value}",
      total_cost: 86.35,
      amount_category: 50,
    },
    {
      receipt: "3.jpg",
      vendor: "Vendor 3",
      line_item: "{key: value}",
      total_cost: 12.58,
      amount_category: 50,
    },
    {
      receipt: "4.jpg",
      vendor: "Vendor 4",
      line_item: "{key: value}",
      total_cost: 18.75,
      amount_category: 50,
    },
    {
      receipt: "5.jpg",
      vendor: "Vendor 5",
      line_item: "{key: value}",
      total_cost: 50.0,
      amount_category: 50,
    },
    {
      receipt: "6.jpg",
      vendor: "Vendor 6",
      line_item: "{key: value}",
      total_cost: 49.9,
      amount_category: 50,
    },
  ];
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <Header />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
