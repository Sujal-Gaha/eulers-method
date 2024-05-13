import { create } from "zustand"

type State = {
    equation: string,
    valueOfX: string,
    valueOfY: string,
    valueOfH: string,
    uptoNumber: string,
    result: string[],
    isEntryValid: boolean,
}

type Action = {
    setEquation: (equation: string) => void,
    setValueOfX: (valueOfX: string) => void,
    setValueOfY: (valueOfY: string) => void,
    setValueOfH: (valueOfH: string) => void,
    setUptoNumber: (uptoNumber: string) => void,
    setResult: (result: string[]) => void,
    setIsEntryValid: (isEntryValid: boolean) => void 
}

export const useValueStore = create<State & Action>((set) => ({
    equation: "",
    valueOfX: "",
    valueOfY: "",
    valueOfH: "",
    uptoNumber: "",
    result: [],
    isEntryValid: true,
    setEquation: (newEquation) => set(() => ({equation: newEquation})),
    setValueOfX: (newValueOfX) => set(() => ({valueOfX: newValueOfX})),
    setValueOfY: (newValueOfY) => set(() => ({valueOfY: newValueOfY})),
    setValueOfH: (newValueOfH) => set(() => ({valueOfH: newValueOfH})),
    setUptoNumber: (newUptoNumber) => set(() => ({uptoNumber: newUptoNumber})),
    setResult: (newResult) => set(() => ({result: newResult})),
    setIsEntryValid: (newIsEntryValid) => set(() => ({isEntryValid: newIsEntryValid}))
}))