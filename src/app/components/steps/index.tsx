import useStore from "../../contex";
import FirstStep from "./first";
import SecondStep from "./second";
import ThirdStep from "./third";

const stepsList = [
  {
    title: "Step 1",
    description: "This is the description for step 1",
    component: () => <FirstStep />,
  },
  {
    title: "Step 2",
    description: "This is the description for step 2",
    component: () => <SecondStep />,
  },
  {
    title: "Step 3",
    description: "This is the description for step 3",
    component: () => <ThirdStep />,
  },
];

export const Steps = () => {
  const step = useStore((state: any) => state.step);
  return <div className="m-10">{stepsList[step].component()}</div>;
};