"use client";

import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type ICustomer } from "@/types/customer.type";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddCustomerForm from "@/app/add/components/add-customer-card/components/add-customer-form/add-customer-form";

interface TableProps {
  customers: ICustomer[];
}

const columnHelper = createColumnHelper<ICustomer>();

const columns = [
  columnHelper.accessor("email", {
    header: () => <span>Email</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("first_name", {
    header: () => <span>Meno</span>,
    cell: (info) => <i>{info.getValue()}</i>,
  }),
  columnHelper.accessor("last_name", {
    header: () => <span>Priezvisko</span>,
  }),
  columnHelper.accessor("vin", {
    header: () => <span>VIN</span>,
  }),
];

const Table: React.FC<TableProps> = ({ customers }) => {
  // console.log("customer", customers);

  const table = useReactTable({
    data: customers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="container">
      <div className="flex flex-row justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" /> Pridat
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Nové vozidlo</DialogTitle>
              <DialogDescription>
                Pridať nové vozidlo do záznamov.
              </DialogDescription>
            </DialogHeader>
            <AddCustomerForm />
          </DialogContent>
        </Dialog>
      </div>
      <ShadcnTable>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </ShadcnTable>
    </div>
  );
};

export default Table;
