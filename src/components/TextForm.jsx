import React,{useState} from 'react'

export default function Form(){
    const [text,setText]=useState("Enter your Text here")
    function handleUpperCase(){
        let newText=text.toUpperCase();
        setText(newText)

    }
    function handleLowerCase(){
        let newText=text.toLowerCase();
        setText(newText)

    }
    function handleSpiralCase(){
        let newText=text.trim().replace(/\s+/g,"-");
        setText(newText)

    }
    function clearBtn(){
        setText("enter your text here")
    }
    function handleChange(e){
        setText(e.target.value)
    }
    return (
        <div>
           <div className="container my-3">
           <h2 >Enter Your Text</h2>
            <div class="mb-3 ">
                   <textarea class="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
           </div>
           <div className="btnArea">
               <div className="container">
                   <div className="row">
                       <div className="col"><button className="btn btn-primary" onClick={handleUpperCase}>Convert To UpperCase</button></div>
                       <div className="col"><button className="btn btn-primary" onClick={handleLowerCase}>Convert To LowerCase</button></div>
                       <div className="col"><button className="btn btn-primary" onClick={handleSpiralCase}>Convert To SpiralCase</button></div>
                       <div className="col"><button className="btn btn-primary" onClick={clearBtn}>Clear</button></div>
                   </div>
               </div>
           </div>
           <div className='my-4'>
           <h4>Text Summary: <span>{text.split(" ").length} Words and {text.length} Characters</span></h4>
           
           <h4 class="my-3">Time To Read: {0.008 * text.length} minutes</h4>
           <h4 className='my-3'>Preview</h4>
           <p className='my-3'>{text}</p>
           </div>
       </div>
    )
}