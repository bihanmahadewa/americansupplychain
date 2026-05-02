import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import { setCoordinates } from "@/lib/store/features/interactionsSlice";
import type { CompanyPin } from "@/lib/types";

export const Explorer = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector((state) => state.maps.companies);
  const loading = useAppSelector((state) => state.maps.loading);
  const error = useAppSelector((state) => state.maps.error);
  const [search, setSearch] = useState("");

  const filtered = search
    ? companies
        .filter(
          (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.city.toLowerCase().includes(search.toLowerCase()) ||
            c.state.toLowerCase().includes(search.toLowerCase()) ||
            c.category.toLowerCase().includes(search.toLowerCase()),
        )
        .slice(0, 100)
    : companies.slice(0, 100);

  const handleSelect = (company: CompanyPin) => {
    if (company.lon != null && company.lat != null) {
      dispatch(setCoordinates([company.lon, company.lat]));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center gap-2 p-4">
        <span className="loading loading-spinner loading-sm"></span>
        Loading companies...
      </div>
    );
  }

  if (error) {
    return <div className="text-error p-4">{error}</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search companies..."
        className="input input-bordered input-sm w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="text-xs opacity-60">
        {search
          ? `${filtered.length}${filtered.length === 100 ? "+" : ""} results`
          : `${companies.length.toLocaleString()} companies loaded`}
      </div>
      <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto">
        {filtered.map((c) => (
          <button
            key={c.id}
            className="btn btn-ghost btn-sm justify-start text-left h-auto py-2 normal-case"
            onClick={() => handleSelect(c)}
          >
            <div className="flex flex-col items-start">
              <span className="font-medium text-sm truncate max-w-full">
                {c.name}
              </span>
              <span className="text-xs opacity-60">
                {c.category} &middot; {c.city ? `${c.city}, ` : ""}
                {c.state}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
