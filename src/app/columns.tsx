"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  BracketsCurly,
  CheckCircle,
  File,
  TextAlignLeft,
} from "@phosphor-icons/react";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  receipt: string;
  vendor: string;
  line_item: string;
  total_cost: number;
  amount_category: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "receipt",
    header: ({ column }) => (
      <div className="flex items-center gap-1">
        <File />
        <h1>Receipt</h1>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <Badge variant={"secondary"} className="text-center gap-1 font-medium">
          <File /> {row.getValue("receipt")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "vendor",
    header: ({ column }) => (
      <div className="flex items-center gap-1">
        <TextAlignLeft />
        <h1>Vendor</h1>
      </div>
    ),
  },
  {
    accessorKey: "line_item",
    header: ({ column }) => (
      <div className="flex items-center gap-1">
        <BracketsCurly />
        <h1>Line Item (JSON)</h1>
      </div>
    ),
  },
  {
    accessorKey: "total_cost",
    header: ({ column }) => (
      <div className="flex items-center gap-1">
        <TextAlignLeft />
        <h1>Total Cost</h1>
      </div>
    ),
    cell: ({ row }) => {
      return <p>{"$" + row.getValue("total_cost")}</p>;
    },
  },
  {
    accessorKey: "amount_category",
    header: ({ column }) => (
      <div className="flex items-center gap-1">
        <CheckCircle />
        <h1>Amount Category</h1>
      </div>
    ),
    cell: ({ row }) => {
      const isAboveTotalCost =
        parseFloat(row.getValue("total_cost")) >=
        parseInt(row.getValue("amount_category"));
      return (
        <Badge
          variant={"secondary"}
          className={cn(
            "text-center gap-1 font-medium rounded-md",
            isAboveTotalCost
              ? "text-red-500 bg-red-100"
              : "text-green-500 bg-green-100"
          )}
        >
          {isAboveTotalCost ? ">=" : "<"}
          {"$" + parseInt(row.getValue("amount_category"))}
        </Badge>
      );
    },
  },
  {
    accessorKey: "plus",
    header: ({ column }) => (
      <div className="flex items-center justify-center gap-1">
        <h1>+</h1>
      </div>
    ),
  },
  {
    accessorKey: "more",
    header: ({ column }) => (
      <div className="flex items-center justify-center gap-1">
        <h1>...</h1>
      </div>
    ),
  },
];
