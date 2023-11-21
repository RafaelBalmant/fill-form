import { useCallback, useEffect } from "react";
import useStore from "./contex";
import { Steps } from "./components/steps";

function App() {
  const {
    setStep,
    step,
    valueStep,
    cleanValueStep,
    setData,
    data,
    finalStep,
    setFinalStep,
  } = useStore((state: any) => state);

  const nextStepCallback = useCallback(() => {
    if (!finalStep && valueStep.length !== 0) {
      if (step === 1) setFinalStep(true);
      setData(valueStep, "text");
      cleanValueStep();
      setStep(step + 1);
    }
  }, [valueStep, step]);

  useEffect(() => {
    console.info("data", data);
  }, [step, valueStep, data]);

  return (
    <div className="bg-gray-300 body-font font-roboto h-screen w-screen inline-block">
      <div className="flex items-center justify-end flex-col bg-slate-100 w-min h-min rounded-md mx-auto mt-10">
        <h1 className="font-bold m-10">teste</h1>
        <Steps />
        {!finalStep && (
          <button
            type="submit"
            className="rounded-md bg-blue-500 text-white px-4 py-2 m-10"
            onClick={nextStepCallback}
          >
            Avancar
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
