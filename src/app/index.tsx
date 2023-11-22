import { useCallback, useEffect } from "react";
import useStore from "./contex";
import { Steps } from "./components/steps";
import Button from "./components/button";

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
    <div className="bg-lavender-indigo body-font font-roboto h-screen w-screen inline-block">
      <div className="flex items-center justify-end flex-col bg-slate-200 w-min h-min rounded-md mx-auto mt-10 drop-shadow-lg p-2">
        <Steps />
        {!finalStep && (
          <div className="w-full flex justify-end">
            <Button callback={nextStepCallback} width="w-max">
              proximo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
