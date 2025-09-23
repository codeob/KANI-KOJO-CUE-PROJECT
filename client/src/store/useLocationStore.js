import { create  } from "zustand";
import locationPins from "../../locations";

const useLocationStore = create((set)=> ({
  locations: locationPins,
  selectedLocation : null,
  setSelectedLocation : (id) => set(() => {
    const loc = locationPins.find((l) => l.id === id);
    return { selectedLocation: loc }
  }),
  clearSelected: () => set({ selectedLocation: null })
}))

export default useLocationStore