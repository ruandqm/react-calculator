import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const [operator, setOperator] = useState(0);

    function inputNum(e) {
        var input = e.target.value
        if (num === 0) {
            setNum(input);
        }
        else {
            setNum(num + input);
        }
    }

    function clear() {
        setNum(0)
    }

    function changeSign() {
        if (num > 0) {
            setNum(-num)
        }
        else {
            setNum(Math.abs(num))
        }
    }

    function percent() {
        setNum(num / 100)
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value
        setOperator(operatorInput)
        setNum1(num)
        setNum(0)
    }

    function calculate() {
        if (operator === "+") {
            setNum(parseFloat(num1) + parseFloat(num))
        }
        else if (operator === "-") {
            setNum(parseFloat(num1) - parseFloat(num))
        }
        else if (operator === "x") {
            setNum(parseFloat(num1) * parseFloat(num))
        }
        else if (operator === "/") {
            setNum(parseFloat(num1) / parseFloat(num))
        }
    }

    return (
        <div className='Calculator'>
            <div className='container-sm mt-3'>
                <div className='wrapper p-2 mb-3'>
                    <h3 className='text-light ms-2 mt-1'>Calculadora</h3>
                    <h1 className='result'>{num}</h1>
                    <button className='gray' onClick={clear}>AC</button>
                    <button className='gray' onClick={changeSign}>+/-</button>
                    <button className='gray' onClick={percent}>%</button>
                    <button className='orange' onClick={operatorHandler} value={"/"}>/</button>
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value={"x"}>x</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value={"-"}>-</button>
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value={"+"}>+</button>
                    <button className='btn-lg ps-4' onClick={inputNum} value={0}>0</button>
                    <button onClick={inputNum} value={"."}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}
