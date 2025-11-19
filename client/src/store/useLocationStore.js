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







// // new store for grouping songs per locations
// // src/store/useLocationStore.js
// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import locationPins from "../../locations"; // your original 17-item array

// // helper: group by locationName
// const groupLocations = (pins) => {
//   const map = new Map();
//   pins.forEach((p) => {
//     const key = p.locationName;
//     if (!map.has(key)) {
//       // take coords from the first occurrence to place the main pin
//       map.set(key, {
//         id: map.size + 1,
//         locationName: key,
//         importance: p.importance,
//         coords: p.coords,
//         songs: [],
//       });
//     }
//     const entry = map.get(key);
//     // store song info (keep original fields relevant for Slide)
//     entry.songs.push({
//       id: p.id,
//       songTitle: p.songTitle,
//       songUrl: p.songUrl,
//       fullsongUrl: p.fullsongUrl,
//       videoUrl: p.videoUrl,
//       artistName: p.artistName,
//       image: p.image,
//       lyrics: p.lyrics,
//       buttons: p.buttons,
//       interview: p.interview,
//       mixingNoteImages: p.mixingNoteImages,
//       writtenReflection: p.writtenReflection,
//     });
//   });
//   return Array.from(map.values());
// };

// const grouped = groupLocations(locationPins);

// const useLocationStore = create(
//   persist(
//     (set) => ({
//       // groupedLocations are the 7 unique locations derived from the 17 songs
//       groupedLocations: grouped,
//       // selectedLocation will be { id, locationName, coords, songs: [...], selectedSong: {...} } or null
//       selectedLocation: null,

//       // id -> groupedLocations id OR provide { id, songId }
//       setSelectedLocation: (payload) =>
//         set((state) => {
//           // allow either number or object
//           if (typeof payload === "number") {
//             const loc = state.groupedLocations.find((l) => l.id === payload);
//             return { selectedLocation: loc ? { ...loc, selectedSong: null } : null };
//           } else if (typeof payload === "object" && payload !== null) {
//             const loc = state.groupedLocations.find((l) => l.id === payload.id);
//             if (!loc) return { selectedLocation: null };
//             const selectedSong = payload.songId ? loc.songs.find((s) => s.id === payload.songId) : null;
//             return { selectedLocation: { ...loc, selectedSong } };
//           }
//           return {};
//         }),

//       // clear selection
//       clearSelected: () => set({ selectedLocation: null }),
//     }),
//     {
//       name: "location-storage", // key name for localStorage
//       partialize: (state) => ({
//         selectedLocation: state.selectedLocation,
//       }),
//     }
//   )
// );

// export default useLocationStore;

