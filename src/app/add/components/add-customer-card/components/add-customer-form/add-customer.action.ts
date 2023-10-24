"use server";

import { db } from "@/server/db";
import { type AddCustomerFormValues } from "./add-customer-form";

export const onCustomerAddAction = async (payload: AddCustomerFormValues) => {
  try {
    const existingUser = await db.customer.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (existingUser) {
      throw new Error("Uživatel s tímto e-mailom už existuje.");
    }

    const res = await db.customer.create({
      data: payload,
    });
  } catch (error) {
    console.log("error");
  }
};
