import Bmi from "./Bmi";
import Calci from "./Calci";

<<<<<<< HEAD
const App =()=>{
  return (
    <>
    <Calci />
    <Bmi />
    </>
  )
=======
function App() {
  const[answer,setAnswer] = useState("0")


  function calculateExpression(expression) {
    try { 
      //replace 02 with 2
      expression = expression.replace(/\b0+(\d+)\b/g, '$1');
      //for log
      expression = expression.replace(/log\(/g, 'Math.log(');
      //for square root
      expression = expression.replace(/√\(/g, 'Math.sqrt(');


      // Replace trigonometric functions (e.g., sin, tan) with Math equivalents
      expression = expression.replace(/sin\(/g, 'Math.sin(');
      expression = expression.replace(/cos\(/g, 'Math.cos(');
      expression = expression.replace(/tan\(/g, 'Math.tan(');
  
      // Replace factorial calculations with a custom function
      expression = expression.replace(/(\d+)!/, 'factorial($1)');
  
      // Define the factorial function
      function factorial(n) {
        if (n === 0) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
      }
  
      // Evaluate the expression using eval
      const result = eval(expression);
  
      if (typeof result === 'number' && isFinite(result)) {
        return result;
      } else {
        return 'Invalid result';
      }
    } catch (error) {
      return 'Error';
    }
  }
  
  
  return (
    <div className="App">
      <div className='calculator'>
            <div id="top">
                {answer}
            </div>
            <div id="bottom">

                <button style={{backgroundColor:"#E916BB",color:"white"}} onClick={(e)=>{
                 if(answer.length>1) {const array=[...answer.slice(0,answer.length-1)] 
                  setAnswer(array)}
                }}>CE</button>

                <button onClick={(e)=>{
                  setAnswer([...answer ,"!"])
                }}>x!</button>

                <button onClick={(e)=>{
                  setAnswer([...answer,e.target.innerHTML])
                }}>{' \u0028 '}</button>

                <button onClick={(e)=>{
                  setAnswer([...answer, e.target.innerHTML])
                }}>{' \u0029 '}</button>

                <button onClick={(e)=>{
                  setAnswer([...answer,e.target.innerHTML])
                }}>%</button>

                <button style={{backgroundColor:"#16e944",color:"white"}} onClick={(e)=>{
                  setAnswer("0")
                }} >AC</button>

                <button onClick={(e)=>{
                  
                  if(answer.length==1 && answer == 0){
                    setAnswer([e.target.innerHTML,"( "])
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML,"( "])}
                  
                }}>sin</button>

                <button onClick={(e)=>{
                  
                  if(answer.length==1 && answer == 0){
                    setAnswer([e.target.innerHTML])
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML])}
                  
                }}>&pi;</button>

                <button onClick={(e)=>{
                
                    
                   if(answer.length==1 && answer == 0){
                    setAnswer(e.target.innerHTML)
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML])}

                }}>7</button>

                <button onClick={(e)=>{
                    if(answer.length==1 && answer == 0){
                      setAnswer(e.target.innerHTML)
                     }
                      else{
                      setAnswer([...answer,e.target.innerHTML])}
                  

                }}>8</button>

                <button onClick={(e)=>{
                   if(answer.length==1 && answer == 0){
                    setAnswer(e.target.innerHTML)
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML])}
                  

                }}>9</button>

                <button onClick={(e)=>{
                  setAnswer([...answer,e.target.innerHTML])

                }}>/</button>

                <button onClick={(e)=>{
                  
                  if(answer.length==1 && answer == 0){
                    setAnswer([e.target.innerHTML,"( "])
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML,"( "])}
                }}>cos</button>

                <button onClick={(e)=>{
                  
                  if(answer.length==1 && answer == 0){
                    setAnswer([e.target.innerHTML,"( "])
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML,"( "])}
                }}>log</button>

                <button onClick={(e)=>{
                    if(answer.length==1 && answer == 0){
                      setAnswer(e.target.innerHTML)
                     }
                      else{
                      setAnswer([...answer,e.target.innerHTML])}

                }}>4</button>

                <button onClick={(e)=>{
                   if(answer.length==1 && answer == 0){
                    setAnswer(e.target.innerHTML)
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML])}

                }}>5</button>

                <button onClick={(e)=>{
                    if(answer.length==1 && answer == 0){
                      setAnswer(e.target.innerHTML)
                     }
                      else{
                      setAnswer([...answer,e.target.innerHTML])}

                }}>6</button>

                <button onClick={(e)=>{
                  setAnswer([...answer,e.target.innerHTML])

                }}>*</button>

                <button onClick={(e)=>{
                   if(answer.length==1 && answer == 0){
                    setAnswer([e.target.innerHTML,"( "])
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML,"( "])}
                }}>tan</button>

                <button onClick={(e)=>{
                  
                  if(answer.length==1 && answer == 0){
                    setAnswer([e.target.innerHTML,"( "])
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML,"( "])}
                }}> &radic;</button>

                <button onClick={(e)=>{

                    if(answer.length==1 && answer == 0){
                       setAnswer(e.target.innerHTML)
                            }
                     else{
                        setAnswer([...answer,e.target.innerHTML])}
                }}>1</button>

                <button onClick={(e)=>{
                   if(answer.length==1 && answer == 0){
                    setAnswer(e.target.innerHTML)
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML])}

                }}>2</button>

                <button onClick={(e)=>{
                  if(answer.length==1 && answer == 0){
                    setAnswer(e.target.innerHTML)
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML])}

                }}>3</button>

                <button onClick={(e)=>{
                   if(answer.length>1){
                    setAnswer([...answer,e.target.innerHTML])}
                    else{
                      setAnswer(e.target.innerHTML)
                    }
                  
                }}>-</button>

                <button onClick={(e)=>{
                  
                  if(answer.length==1 && answer == 0){
                    setAnswer([e.target.innerHTML])
                   }
                    else{
                    setAnswer([...answer,e.target.innerHTML])}
                }}>e</button>

                <button onClick={(e)=>{
                  setAnswer([...answer,"^"])
                }}>x<sup>y</sup></button>

                <button onClick={(e)=>{
                   if(answer.length>1){
                    setAnswer([...answer,e.target.innerHTML])}
                    else{
                      setAnswer(e.target.innerHTML)
                    }

                }}>0</button>

                <button onClick={(e)=>{
                  setAnswer([...answer,e.target.innerHTML])
                }}>.</button>

                <button style={{backgroundColor:"#202ddf",color:"white"}} onClick={()=>{
                  
                  const result=calculateExpression(answer.join(""))
                 Number.isInteger(result) ? setAnswer(result.toString()) : setAnswer(result ) 
                  
                
                }}>=</button>

                <button onClick={(e)=>{
                  setAnswer([...answer,e.target.innerHTML])

                }}>+</button>
                
                
            </div>
      </div>
    </div>
  );
>>>>>>> 026ea193d71290e29d3e52e861186d4fb480d957
}

export default App;
