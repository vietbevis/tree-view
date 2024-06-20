import { create } from "zustand";

export const useFieldChangeStore = create((set) => ({
  fields: undefined,
  setFields: (fields) => set({ fields }),
}));
