import React, {useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState("");

 /* For convert case to upper case */
const handleUpClick = (e) => {
  console.log("Uppercse was clicked");
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to upper case", "success ");

  
}
 /* For convert case to lower case */
const handlelowClick = (e) => {
  console.log("Uppercse was clicked");
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lower case", "success ");
  
}
const handleCopy = (e) => {
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard", "success ");
}


const handleOnChange= (event) => {
console.log("On Change");
setText(event.target.value)
}

  return (
    <>
   
    <div className="container" style = {{color:props.mode ==='light'?'black':'white'}}>
      <h1 >{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" style = {{backgroundColor:props.mode ==='light'?'white':'rgb(36 74 104)',color:props.mode ==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to UpperCase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
    </div>
   
   {/* For calculate words , characters , word read time */}
    <div className="container mt-5" style = {{color:props.mode ==='light'?'black':'white'}}>

      <h1> Your Text Summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p> {0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p> {text.length>0?text:"Nothing to preview"}</p>


    </div>

    </>
  )
}
