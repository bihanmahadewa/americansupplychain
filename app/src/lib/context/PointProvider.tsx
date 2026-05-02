// Hooks
import { useEffect } from "react";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { mapActions } from "@/lib/store/features/arcgis";

// Functions
import { GetCompanies } from "@/lib/client";

export function PointProvider({ children }: { children: React.ReactNode }) {
  const metadata = useAppSelector((state) => state.maps.PointMetadata);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function load() {
      try {
        dispatch(mapActions.setLoading(true));
        const [layer, metadata, companies] = await GetCompanies();

        dispatch(mapActions.PointLayers(layer));
        dispatch(mapActions.PointMetadata(metadata));
        dispatch(mapActions.setCompanies(companies));
      } catch (error) {
        console.error("Error loading company data:", error);
        dispatch(
          mapActions.setError(
            error instanceof Error ? error.message : "Failed to load data",
          ),
        );
      } finally {
        dispatch(mapActions.setLoading(false));
      }
    }

    if (!metadata) {
      load();
    }
  }, [metadata, dispatch]);

  return <>{children}</>;
}
