import { twMerge } from "tailwind-merge"
function CalculatorBtn({Char,className}:{Char:string,className?:string}){
  return(
    <button className={twMerge("bg-stone-400 text-white py-2 aspect-square rounded-md shadow-md hover:brightness-85 hover:cursor-pointer transition-all duration-500",className)}>
      {Char}
    </button>
  )
}
function MainContent() {

  return (
    <div>
      <div className="bg-stone-300 overflow-clip absolute top-35 left-130 justify-center grid grid-cols-4 rounded-lg gap-9 p-5 text-2xl">
      <CalculatorBtn Char="C"></CalculatorBtn>
      <CalculatorBtn Char="±"></CalculatorBtn>
      <CalculatorBtn Char="%"></CalculatorBtn>
      <CalculatorBtn Char="÷" className="bg-orange-500"></CalculatorBtn>
      <CalculatorBtn Char="7" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="8" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="9" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="×" className="bg-orange-500"></CalculatorBtn>
      <CalculatorBtn Char="4" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="5" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="6" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="-" className="bg-orange-500"></CalculatorBtn>
      <CalculatorBtn Char="1" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="2" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="3" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="+" className="bg-orange-500"></CalculatorBtn>
      <CalculatorBtn Char="0" className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="." className=" bg-stone-200 text-gray-500"></CalculatorBtn>
      <CalculatorBtn Char="⌫" className=" bg-red-500 text-white"></CalculatorBtn>
      <CalculatorBtn Char="=" className="bg-green-500"></CalculatorBtn>
    </div>
    </div>
    
  )
}

export default MainContent