"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import {
  initialValues as defaultValues,
  formSchema,
} from "./add-customer-form.schema";
import { Button } from "@/components/ui/button";
import axios, { isAxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast";

export type AddCustomerFormValues = z.infer<typeof formSchema>;

const AddCustomerForm = () => {
  const { toast } = useToast();

  const form = useForm<AddCustomerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values: AddCustomerFormValues) => {
    try {
      const res = await axios.post("/api/add-customer", values);
      toast({
        title: res.data.message,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: isAxiosError(error)
          ? error.response?.data.message
          : "Neznama chyba",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-3">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meno</FormLabel>
                <FormControl>
                  <Input placeholder="Meno" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priezvisko</FormLabel>
                <FormControl>
                  <Input placeholder="Priezvisko" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="vin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>VIN</FormLabel>
              <FormControl>
                <Input placeholder="VIN" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" className="w-1/2">
            Pridať
          </Button>
        </div>{" "}
      </form>
    </Form>
  );
};

export default AddCustomerForm;
