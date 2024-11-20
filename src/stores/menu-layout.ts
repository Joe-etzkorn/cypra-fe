import { create } from "zustand"
import { produce } from "immer"

interface MenuLayoutStore {
  isOpenMenuLayout: boolean
  toggleOpenMenuLayout: (isOpen: boolean) => void
}

export const useMenuLayout = create<MenuLayoutStore>((set) => ({
  isOpenMenuLayout: false,
  toggleOpenMenuLayout: (isOpen) =>
    set(
      produce((state) => {
        state.isOpenMenuLayout = isOpen
      }),
    ),
}))
