"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              <TableHead className="flex items-center justify-center border-r-[1px] last:border-none text-center h-8">
                <Checkbox className="-translate-x-2" />
              </TableHead>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="border-r-[1px] last:border-none h-8"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-gray-950">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                <TableCell className="border-r-[1px] py-1 text-center text-sm text-gray-400">
                  {rowIndex + 1}
                </TableCell>
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      "border-r-[1px] py-1 text-sm",
                      cellIndex === columns.length - 2 && "border-none"
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
          <TableRow className="hover: cursor-pointer">
            <TableCell className="py-1 text-center border-r-[1px] text-sm text-gray-600">
              +
            </TableCell>
            <TableCell
              colSpan={columns.length}
              className="py-1 text-gray-600 text-[12px]"
            >
              New entity
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
