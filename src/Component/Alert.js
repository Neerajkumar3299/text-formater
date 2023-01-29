import { useEffect } from "react"
function Alert({alert,showAlert}){
    const {type,msg}=alert
    useEffect(()=>{
        let si=setTimeout(()=>{
            showAlert();
        },2000)
        return ()=>{clearTimeout(si)};
    })
    return(
        <>
            <div className={type==='success'?'alert alert-success':'alert alert-danger'}>
                <h3>{msg}</h3>
            </div>
        </>
    )
}
export default Alert