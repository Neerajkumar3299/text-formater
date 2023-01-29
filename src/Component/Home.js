import { useState,useEffect,useRef } from "react";
import Alert from "./Alert";
import Modal from "./Modal";
function Home(){
    const [text,setText]=useState("")
    const [count,setCount]=useState(0);
    const [showCount,setShowCount]=useState(false);
    const [generateWords,setGenerateWords]=useState(10);
    const [showModal,setShowModal]=useState(false);
    const [alert,setAlert]=useState({show:false,type:"",msg:""})
    const textareaRef=useRef(null);
    const copyToClipboard=()=>{
        navigator.clipboard.writeText(text);
    }
    const countWords=()=>{
        if(!text){
            setCount(0)
        }
        else{
            setCount(text.split(" ").length)
        }
        setShowCount(!showCount)
    }
    const showAlert = (show = false, msg = "", type = "") => {
      const newAlert = { show, type, msg };
      setAlert(newAlert);
    };
    const handleUppercase=()=>{
      if(text.length===0){
        showAlert(true, "Enter valid text", "danger");
      }
      else{
        
        setText(text.toUpperCase());
        showAlert(true,"Converted to uppercase","success");
      }
    }
    const handleLowerCase=()=>{
      if(text.length===0){
        showAlert(true, "Enter valid text", "danger");
      }
      else{
        
        setText(text.toLowerCase())
        showAlert(true,"Converted to Lower Case","success");
      }
    }
    const handleCopyToClipboard=()=>{
      if(text.length===0){
        showAlert(true, "Enter valid text", "danger");
      }
      else{
        
        copyToClipboard();
        showAlert(true,"Copied to Clipboard","success");
      }
    }
    const handleCountWords=()=>{
      if(text.length===0){
        showAlert(true, "Enter valid text", "danger");
      }
      else{ 
        countWords();
        showAlert(true,"Counted words successfully and given below",'success')
      }
    }
    
    const handleClear=()=>{
      if(text.length===0){
        showAlert(true, "Enter valid text", "danger");
      }
      else{
        setText("");
        showAlert(true,"Cleared all text","success")
      }
    }
    useEffect(() => {
      textareaRef.current.focus();
    }, []);
    return (
      <>
        {showModal && <Modal setText={setText} generateWords={generateWords} setGenerateWords={setGenerateWords} setShowModal={setShowModal}/>}
        <div className="home">
          {alert.show && <Alert alert={alert} showAlert={showAlert}/>}
          <h3>Text Formatter</h3>
          <textarea
            name="text"
            id="text"
            cols="50"
            rows="10"
            value={text}
            onChange={(event) => setText(event.target.value)}
            ref={textareaRef}
          />
          <div className="btn-container">
            <button className="btn" onClick={handleUppercase}>
              Uppercase
            </button>
            <button
              className="btn"
              onClick={handleLowerCase}
            >
              Lowercase
            </button>
            <button className="btn" onClick={handleCopyToClipboard}>
              Copy All
            </button>
            <button className="btn" onClick={handleCountWords}>Count Words</button>
            <button className="btn" onClick={()=>setShowModal(true)}>Generate String</button>
            <button className="btn btn-clear" onClick={handleClear}>
              Clear
            </button>
          </div>
          {showCount && (
            <div className="count-words">
              <h4>Total Words</h4>
              <p>{count}</p>
            </div>
          )}
        </div>
      </>
    );
}
export default Home