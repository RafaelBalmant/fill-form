import { create } from "zustand";

interface currentStepInterface {
  step: number;
  data: string;
}

const useStore = create((set) => ({
  step: 0,
  valueStep: "",
  data: {},
  finalStep: false,
  setFinalStep: (data: boolean) => set(() => ({ finalStep: data })),
  setValueStep: (data: string) => set(() => ({ valueStep: data })),
  setStep: (step: number) => set(() => ({ step })),
  setData: (data, type) =>
    set((state: any) => ({
      data: {
        ...state.data,
        [state.step]: type === "text" ? state.valueStep : data,
      },
    })),
  cleanValueStep: () => set((state: any) => ({ valueStep: "" })),
}));

export default useStore;
