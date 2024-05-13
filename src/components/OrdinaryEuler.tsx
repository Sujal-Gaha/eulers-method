import { useState } from "react";
import { useModalStore } from "./store/modalStore";
import ResultModal from "./ResultModal";
import { useValueStore } from "./store/valueStore";

export default function OrdinaryEuler() {
  const [equation, setEquation] = useState("");
  const [valueOfY, setValueOfY] = useState("");
  const [valueOfH, setValueOfH] = useState("");

  const valueOfX = useValueStore((state) => state.valueOfX);
  const setValueOfX = useValueStore((state) => state.setValueOfX);
  const setResult = useValueStore((state) => state.setResult);
  const uptoNumber = useValueStore((state) => state.uptoNumber);
  const setUptoNumber = useValueStore((state) => state.setUptoNumber);

  const handleCalculation = () => {
    let y = parseFloat(valueOfY);
    let x = parseFloat(valueOfX);
    const h = parseFloat(valueOfH);
    const n = parseFloat(uptoNumber);
    const output: string[] = [];

    while (x < n) {
      const num = parseFloat(eval(equation));
      const roundedNum = num.toFixed(5);
      y = y + h * parseFloat(roundedNum);
      output.push(y.toFixed(5));
      x += h;
    }
    setResult(output);
  };

  const resetAllValues = () => {
    setEquation("");
    setValueOfX("");
    setValueOfY("");
    setValueOfH("");
    setUptoNumber("");
  };

  const isResultModalOpen = useModalStore((state) => state.isResultModalOpen);
  const setIsResultModalOpen = useModalStore(
    (state) => state.setIsResultModalOpen
  );

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-8 bg-containerColour h-[60%] w-[443px] px-6 py-14 rounded-xl shadow-xl">
        <h1 className="text-2xl font-medium">Euler's Method</h1>
        <form
          className="flex flex-col h-full w-full justify-start gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            handleCalculation();
            setIsResultModalOpen(true);
          }}
        >
          <div className="flex flex-col w-full gap-4">
            <input
              className="p-3 rounded-md"
              type="text"
              placeholder="Enter the equation"
              required
              value={equation}
              onChange={(event) => {
                setEquation(event.target.value);
              }}
            />
            <input
              className="p-3 rounded-md"
              type="text"
              placeholder="Enter the value of x"
              value={valueOfX}
              required
              onChange={(event) => {
                setValueOfX(event.target.value);
              }}
            />
            <input
              className="p-3 rounded-md"
              type="text"
              placeholder="Enter the value of y"
              required
              value={valueOfY}
              onChange={(event) => {
                setValueOfY(event.target.value);
              }}
            />
            <input
              className="p-3 rounded-md"
              type="text"
              placeholder="Enter the value of h"
              required
              value={valueOfH}
              onChange={(event) => {
                setValueOfH(event.target.value);
              }}
            />
            <input
              className="p-3 rounded-md"
              type="text"
              placeholder="Enter the value of y(?)"
              required
              value={uptoNumber}
              onChange={(event) => {
                setUptoNumber(event.target.value);
              }}
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-submitButtonColour hover:bg-hoverSubmitButtonColour text-white p-3 rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full bg-resetButtonColour hover:bg-hoverResetButtonColour text-white p-3 rounded-md"
              onClick={resetAllValues}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      {isResultModalOpen && <ResultModal />}
    </div>
  );
}
