import { twMerge } from "tailwind-merge"
import { useState, type ButtonHTMLAttributes } from "react"
function CalculatorBtn({Char,className,...rest}:{Char:string,className?:string} & ButtonHTMLAttributes<HTMLButtonElement>){
  return(
    <button className={twMerge("bg-stone-400 text-white py-2 aspect-square rounded-md shadow-md hover:brightness-85 hover:cursor-pointer transition-all duration-500",className)} {...rest}>
      {Char}
    </button>
  )
}

function MainContent() {
  const [curVal,setCurVal] = useState('')
  const [prev,setPrev] = useState('')
  const [op,setOp] = useState('')
  function HandleDecimalClick(i:string){
    setCurVal(num => num + i)
  }
  function HandleClearAll(){
    setCurVal('')
  }
  function HandlePercent(){
    setCurVal(curr => String(Number(curr) / 100))
  }
  function HandleOperations(op:string){
    setOp(op)
    setPrev(curVal)
    setCurVal('')
  }
  function HandleEquals(){
    if(op === '÷'){
      setCurVal(String(Number(prev) / Number(curVal)))
      setPrev('')
      setOp('')
    } else if(op === '+'){
      setCurVal(String(Number(prev) + Number(curVal)))
      setPrev('')
      setOp('')
    } else if(op === '-'){
      setCurVal(String(Number(prev) - Number(curVal)))
      setPrev('')
      setOp('')
    } else if(op === '×') {
      setCurVal(String(Number(prev) * Number(curVal)))
      setPrev('')
      setOp('')
    }
  }
  return (
    <div className="bg-stone-300 overflow-clip absolute top-20 left-130 rounded-lg text-2xl">
      <div className="bg-stone-400 m-3 p-2 text-right rounded-md shadow-md h-14">{curVal}</div>
      <div className="grid grid-cols-4  gap-9 p-5 ">
          <CalculatorBtn Char="C" onClick={() => HandleClearAll()}></CalculatorBtn>
          <CalculatorBtn Char="±"></CalculatorBtn>
          <CalculatorBtn Char="%" onClick={() => HandlePercent()}></CalculatorBtn>
          <CalculatorBtn Char="÷" onClick={() => HandleOperations('÷')} className="bg-orange-500"></CalculatorBtn>
          <CalculatorBtn Char="7" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('7')}></CalculatorBtn>
          <CalculatorBtn Char="8" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('8')}></CalculatorBtn>
          <CalculatorBtn Char="9" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('9')}></CalculatorBtn>
          <CalculatorBtn Char="×" onClick={() => HandleOperations('×')} className="bg-orange-500"></CalculatorBtn>
          <CalculatorBtn Char="4" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('4')}></CalculatorBtn>
          <CalculatorBtn Char="5" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('5')}></CalculatorBtn>
          <CalculatorBtn Char="6" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('6')}></CalculatorBtn>
          <CalculatorBtn Char="-" onClick={() => HandleOperations('-')} className="bg-orange-500"></CalculatorBtn>
          <CalculatorBtn Char="1" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('1')}></CalculatorBtn>
          <CalculatorBtn Char="2" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('2')}></CalculatorBtn>
          <CalculatorBtn Char="3" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('3')}></CalculatorBtn>
          <CalculatorBtn Char="+" onClick={() => HandleOperations('+')} className="bg-orange-500"></CalculatorBtn>
          <CalculatorBtn Char="0" className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('0')}></CalculatorBtn>
          <CalculatorBtn Char="." className=" bg-stone-200 text-gray-500" onClick = {() => HandleDecimalClick('.')}></CalculatorBtn>
          <CalculatorBtn Char="⌫" className=" bg-red-500 text-white"></CalculatorBtn>
          <CalculatorBtn Char="=" className="bg-green-500" onClick={HandleEquals}></CalculatorBtn>
        </div>
    </div>
    
  )
}

export default MainContent