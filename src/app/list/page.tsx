import { db } from "@/server/db";
import Table from "./table";

export default async function ListPage() {
  const customers = await db.customer.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
    include: {
      cars: {
        include: {
          terms: true,
        },
      },
    },
  });
  // console.log(customers);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Table customers={customers} />
    </div>
  );
}
