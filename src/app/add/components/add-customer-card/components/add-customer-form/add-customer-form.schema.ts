"use client"

import * as z from "zod"

export const initialValues = {
    email: '',
    vin: '',
    first_name: '',
    last_name: ''
}

export const formSchema = z.object({
  email: z.string({required_error: 'Email is required'}).email({message: 'Neplatný email'}),
  vin: z.string().max(30, {message: "Prosím skontrolujte zadané VIN číslo"}).optional().or(z.literal('')),
  first_name: z.string().optional().or(z.literal('')),
  last_name: z.string().optional().or(z.literal('')),
})


