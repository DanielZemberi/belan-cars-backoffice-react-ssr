import { type AddCustomerFormValues } from "@/app/add/components/add-customer-card/components/add-customer-form/add-customer-form";
import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res: AddCustomerFormValues = await req.json();
  const { email, first_name, last_name, vin } = res;

  try {
    const existingUser = await db.customer.findFirst({
      where: {
        email,
      },
    });
    if (existingUser) {
      console.log("user exists");

      return NextResponse.json(
        { message: "Uživatel s tímto e-mailom už existuje.", status: "error" },
        { status: 400 },
      );
    }

    await db.customer.create({
      data: {
        email,
        first_name,
        last_name,
        vin,
      },
    });

    return NextResponse.json(
      { message: "Nové vozidlo bolo úspešne pridané", status: "success" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Neporadilo sa pridať nové vozidlo.", status: "error" },
      { status: 500 },
    );
  } finally {
    await db.$disconnect();
  }
}
