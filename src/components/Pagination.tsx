

import { Button } from "@/components/ui/button";
import { formUrlQuery } from "@/lib/utils";
import { PaginationProps } from "@/types";

export const Pagination = ({ page, totalPages }: PaginationProps) => {


  const handleNavigation = (type: "prev" | "next") => {
    const pageNumber = type === "prev" ? page - 1 : page + 1;
  }
    //const newUrl = formUrlQuery({});

  return (
    <div className="flex justify-between gap-3">
      <Button
        size="lg"
        variant="ghost"
        className="p-0 hover:bg-transparent"
        onClick={() => handleNavigation("prev")}
        disabled={Number(page) <= 1}
      >
        <img
          src="/icons/arrow-left.svg"
          alt="arrow"
          className="mr-20"
        />
        Prev
      </Button>
      <p className="text-14 flex items-center px-2">
        {page} / {totalPages}
      </p>
      <Button
        size="lg"
        variant="ghost"
        className="p-0 hover:bg-transparent"
        onClick={() => handleNavigation("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
        <img
          src="/icons/arrow-left.svg"
          alt="arrow"
          className="ml-2 w-20 h-20 -scale-x-100"
        />
      </Button>
    </div>
  );
}
