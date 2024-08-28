"use client";

import {
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { decryptKey } from "@/lib/utils";
// Defines the type for DataTable component props. It expects:
// columns: An array of ColumnDef objects defining the table columns.
// data: An array of data objects to be displayed in the table.
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
/The main functional component for rendering the data table. It is generic over TData (type of data) and TValue (type of cell values)./;
export function DataTable<TData, TValue>({
  columns,
  data,
}: //Retrieves the encrypted access key from local storage if the code is running in the browser (typeof window !== "undefined").
DataTableProps<TData, TValue>) {
  const encryptedKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accessKey")
      : null;

  useEffect(() => {
    // Decrypts the access key.
    const accessKey = encryptedKey && decryptKey(encryptedKey);
    //Redirects to the homepage if the decrypted key does not match the expected admin passkey.
    if (accessKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY!.toString()) {
      redirect("/");
    }
  }, [encryptedKey]);
  // This hook is used to configure the table. It takes the data, columns, and row models (getCoreRowModel, getPaginationRowModel) as inputs and returns an object representing the table.
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="data-table">
      <Table className="shad-table">
        {/* Header Rendering: Iterates over table.getHeaderGroups() to render table headers. */}
        <TableHeader className=" bg-dark-200">
          {/* Maps over table.getHeaderGroups() to render header rows and columns. */}
          {table.getHeaderGroups().map((headerGroup) => (
            // Row Rendering: Iterates over table.getRowModel().rows to render table rows and cells. If there are no rows, a "No results" message is displayed.
            <TableRow key={headerGroup.id} className="shad-table-row-header">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="shad-table-row"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
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
        </TableBody>
      </Table>
      <div className="table-actions">
        {/* Previous Page: Moves to the previous page if possible.
          Next Page: Moves to the next page if possible. */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="shad-gray-btn"
        >
          <Image
            src="/assets/icons/arrow.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="shad-gray-btn"
        >
          <Image
            src="/assets/icons/arrow.svg"
            width={24}
            height={24}
            alt="arrow "
            className="rotate-180"
          />
        </Button>
      </div>
    </div>
  );
}
