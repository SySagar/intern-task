import { create } from 'zustand'

const useLocationSearch = create((set) => ({
  searchItem: "London",
  setSearchItem: (data) => set( ({ searchItem: data })),
}))

export default useLocationSearch;