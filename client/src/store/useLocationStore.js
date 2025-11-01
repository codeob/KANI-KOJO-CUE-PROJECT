// src/store/useLocationStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import locationPins from "../../locations";

const useLocationStore = create(
  persist(
    (set) => ({
      locations: locationPins,
      selectedLocation: null,

      setSelectedLocation: (id) =>
        set(() => {
          const loc = locationPins.find((l) => l.id === id);
          return { selectedLocation: loc };
        }),

      clearSelected: () => set({ selectedLocation: null }),
    }),
    {
      name: "location-storage", // key name for localStorage
      partialize: (state) => ({
        selectedLocation: state.selectedLocation,
      }),
    }
  )
);

export default useLocationStore;
