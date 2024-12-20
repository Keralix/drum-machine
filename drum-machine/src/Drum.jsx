import { Children } from "react"

function Drum ({audioClip,onClick}){
    const playSound=(audioClip)=>{
        document.getElementById(audioClip.keyTrigger).play()
        
    document.getElementById("display").innerHTML=audioClip.description
    }
    return (
        <div id={"drum-"+audioClip.keyTrigger} onClick={()=>playSound(audioClip)} className="drum-pad">
            <p>{audioClip.keyTrigger}</p>
            <audio src={audioClip.url} className="clip" id={audioClip.keyTrigger}></audio>
        </div>
    )
}
export default Drum