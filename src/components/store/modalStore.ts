import {create} from "zustand";

type State = {
    isResultModalOpen: boolean
}

type Action = {
    setIsResultModalOpen: (isResultModalOpen: boolean) => void;
}

export const useModalStore = create<State & Action>((set) => ({
    isResultModalOpen: false,
    setIsResultModalOpen: (newIsResultModalOpen) => set(() => ({isResultModalOpen: newIsResultModalOpen}))
}))