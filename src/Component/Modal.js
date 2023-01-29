import {AiOutlineClose} from "react-icons/ai"
import GenerateString from "./GenerateString"
function Modal({generateWords,setGenerateWords,setShowModal,setText}){
    const handleSubmit=()=>{}
    const handleGenerate=()=>{
        setText(GenerateString(generateWords))
        setShowModal(false);
    }
    return(
        <>
            <div className="modal">
                <AiOutlineClose className="close-modal" onClick={()=>setShowModal(false)}/>
                <form action="#" onSubmit={handleSubmit}>
                    <p>Enter Character count</p>
                    <input type="text" name="generateWords" id="generateWords" value={generateWords} onChange={(event)=>setGenerateWords(Number(event.target.value))}/>
                    <button className="btn modal-btn" onClick={handleGenerate}>Generate</button>
                </form>
            </div>
        </>
    )
}
export default Modal