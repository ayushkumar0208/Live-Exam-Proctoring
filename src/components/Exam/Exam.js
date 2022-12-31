import React,{useState,useEffect} from "react";
import Quiz from '../Quiz/Quiz'
import Loading  from "../Loading/Loading";
import Detect from "../Detect";
import './Exam.css'
import { useNavigate } from "react-router-dom";
import Button from "../Quiz/common/Button/Button";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
function Exam(){

    const [prediction,setPrediction] = useState({})
    const [initial,setInitial] = useState(true)
    const [ count,setCount] = useState(1)
    const [ visible,setVisible] = useState(1)


    // const {
    //     transcript,listening,resetTranscript,browserSupportsSppechRecognition
    // }=useSpeechRecognition();


    // if(!browserSupportsSppechRecognition){
    //     console.log("Microphone Recording..")
    // }

    useEffect(()=>{
        // console.log(prediction.length)
        const Objects=[]
        for(var i=0;i<prediction.length;i++){
        //   console.log(prediction[i].class)
          // var str = props.prediction[0].join(' ')+'.';
          // console.log(str);
        }
        // if(prediction.length>=2 || transcript.length>5){
        //     setVisible(0);
        //     // console.log("Setting")
        // }
        if(prediction.length>=2){
            setVisible(0);
            // console.log("Setting")
        }
        // if(!listening){
        //     SpeechRecognition.startListening()
        // }
      })
      
      const increaseCount = (e) => {
        // console.log("Fu/cntion")
        setCount(count+1);
        if(count===5){
            // console.log('debar')
        }
        // console.log(visible);
        setVisible(1)
        
      }
      let navigate = useNavigate(); 
      const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
      }
    return (
        <div className="Exam">
            {/* {!listening? <>
            {SpeechRecognition.startListening}
            </>:<p id='temp-2'></p>} */}

            <Detect id='Null' prediction={prediction} setPrediction={setPrediction}/>
            {window.navigator.standalone || (document.fullScreenElement && document.fullScreenElement !==null) || (document.mozFullScreen || document.webkitIsFullScreen) || (!window.screenTop && !window.screenY)?(
                <div className="fullscreen">
                <p id='full-text'>Switch to Full Screen Mode</p>  
                </div> 
            ):(
                <div className="Exam-main">
                {prediction && prediction.length  ? (
                    <div>
                        {/* (prediction.length>=2 && visible==0) || (transcript.length>5 && visible==0) */}
                        {(prediction.length>=2 && visible==0)?(
                        <div className='warning'>
                            <div className='warning-main'>
                            <div>
                                <p id='warning-text'>Warning ! {count}</p>
                                <p id="warning-desc">We discovered that you don't seem to be paying attention to the exam, appear to be cheating, or aren't properly following the instructions.</p>
                                <b><p id="warning-desc">Failure to pay attention to the exam will result in disqualification</p></b>
                            </div>
                                <img id='warning-img' src='Warning.webp' alt="warning"/>
                            </div>
                            <button id='okay-button' onClick={() => {count>=5?(routeChange()):(increaseCount())
                                
                            }}>Okay</button>
                        </div>
                        ):(
                            (visible==1?(
                                <Quiz/>
                            ):(

                        <div className='warning'>
                            <div className='warning-main'>
                            <div>
                                <p id='warning-text'>Warning ! {count}</p>
                                <p id="warning-desc">We discovered that you don't seem to be paying attention to the exam, appear to be cheating, or aren't properly following the instructions.</p>
                                <b><p id="warning-desc">Failure to pay attention to the exam will result in disqualification</p></b>
                            </div>
                                <img id='warning-img' src='Warning.webp' alt="warning"/>
                            </div>
                            <button id='okay-button' onClick={() => {count>=5?(routeChange()):(increaseCount())
                                
                            }}>Okay</button>
                        </div>
                            ))
                            
                        )}
                </div>    
                ):(
                    <div id="temp">
                        <Loading/>
                    </div>
                )}
            </div>             
            )}
        </div>
      );
}
export default Exam;