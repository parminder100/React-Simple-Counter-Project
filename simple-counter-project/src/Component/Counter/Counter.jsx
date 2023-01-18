import { useState } from "react";
import Header from "../Header/Header";

const Counter = () =>{
    let[count, setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count + 1);
    }
    const handleDecrement = () =>{
        setCount(count - 1);
    }
    return(
        <>
            <Header />
            <div style={{textAlign:"center", marginTop:"40px"}}>
                <h1 style={{fontSize:"40px", marginBottom:"40px"}}>{count}</h1>
                <div>
                    <button style={{marginRight:"20px"}} onClick={handleIncrement}>Increase</button>
                    <button onClick={handleDecrement}>Decrease</button>
                </div>
            </div>
        </>
    )
}
export default Counter;