import './Bmi.css';
import {useState} from 'react';

const Bmi =() =>{
    const[values , setValues] = useState({
        "weight" : 0,
        "height" : 0,
    })
    const[result ,setResult] = useState({
        "Bmi":0,
        "output":"Thin"
    })

    const handleSubmit = () => {
        const BMI = 703 * (values.weight / (values.height * values.height));
        console.log("BMI:", BMI);
    
        let output = "";
        if (BMI <= 18.5) {
            output = "Thin";
        } else if (BMI > 18.5 && BMI < 24.9) {
            output = "Healthy";
        } else if (BMI >= 25 && BMI < 29) {
            output = "Overweight";
        } else {
            output = "Obese";
        }
    
        console.log("Output:", output);
    
        setResult({
            ...result,
            Bmi: BMI,
            output: output,
        });
    };
    const handleReload = () =>{
        setValues({
            "weight" : 0,
            "height" : 0,
        })
        setResult({
        "Bmi":0,
         "output":""
        })
    }
    

    return (
      <>
      <div id="bmi-container">
        <h1 >BMI Calculator</h1>
        <div className="inputs">
            <h4>Weight in lbs</h4>
            <input type='number' value = {values.weight} onChange={(e)=>{
                setValues({...values , weight : e.target.value})
            }}/>
        </div>
        <div className="inputs">
            <h4>Height in inches</h4>
            <input type='number' value = {values.height} onChange={(e)=>{
                setValues({...values, height : e.target.value})
            }} />
        </div>
        <div className="buttons">
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReload}>Reload </button>
        </div>
        <div className="results">
            <p>Your BMI is: {result.Bmi} </p>
            <h4>You are {result.output}</h4>
        </div>
      </div>
      </>
    )
}

export default Bmi;