"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ServiceSelect() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="items flex flex-row items-end gap-3">
      <div className="flex w-full flex-col gap-3">
        <Label htmlFor="type">Služba</Label>
        <Select>
          <SelectTrigger id="type">
            <SelectValue placeholder="Vyberťe" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="olej">Výmena oleja</SelectItem>
            <SelectItem value="emisna">Emisná kontrola</SelectItem>
            <SelectItem value="stk">STK</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              " justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Vyberte dátum</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ServiceSelect;
