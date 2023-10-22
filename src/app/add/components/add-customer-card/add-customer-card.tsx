import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddCustomerForm from "./components/add-customer-form/add-customer-form";

const AddCustomerCard: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <Card>
        <CardHeader>
          <CardTitle>Nové vozidlo</CardTitle>
          <CardDescription>Pridať nové vozidlo do záznamov.</CardDescription>
        </CardHeader>
        <CardContent>
          <AddCustomerForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCustomerCard;
