import React from "react";
import './Instruction.css'

function Instruction(){
    return(
        <div className="Instruction">
            <div className="Instruction-container-1">
                <div className="Instruction-heading">
                    <p id="Instruction-heading-1">Instruction</p>
                    <p id="Instruction-heading-2">'s</p>
                </div>
                <div className="Instruction-points">
                    <p className="Instruction-point">1. It is an Online Examination system, fully computerized, user friendly having advanced
security features making it fair, transparent and standardized.</p>
                    <p className="Instruction-point">2. You must not use headphones, ear buds, or any other type of listening equipment.</p>
                    <p className="Instruction-point">3. You must not communicate with any other person by any means.</p>
                    <p className="Instruction-point">4. You must not use a phone for any reason.</p>
                    <p className="Instruction-point">5. You must not leave the Frame during the exam for any reason</p>
                </div>
                <div className="Instruction-start-button">
                <a href="/examination">
                    <button id="okay-button" >Start</button>
                </a>
                
                </div>
            </div>
            <div className="Instruction-container-2">
                <img id='img-instruc' src="Instruction.gif" alt='Instruction'/>
            </div>
        </div>
    )
}
export default Instruction;