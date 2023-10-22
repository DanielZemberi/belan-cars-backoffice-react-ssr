import { ModeToggle } from "@/components/common/mode-toggle";
import AddCustomerCard from "./components/add-customer-card";

export default function AddPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <AddCustomerCard />
      <ModeToggle />
    </div>
  );
}
