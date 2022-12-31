import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawMesh, drawRect } from "../utilities";
import './Detect.css'

function Detect(props){
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    
    // Main function
    const runCoco = async () => {
        // 3. TODO - Load network 
        const net = await cocossd.load();
        const net_face = await facemesh.load({
        inputResolution:{width:640,height:480},scale:0.8
        });
        //  Loop and detect hands
        setInterval(() => {
        detect(net,net_face);
        });
    };
    const detect = async (net,net_face) => {
        // Check data is available
        if (
          typeof webcamRef.current !== "undefined" &&
          webcamRef.current !== null &&
          webcamRef.current.video.readyState === 4
        ) {
          // Get Video Properties
          const video = webcamRef.current.video;
          const videoWidth = webcamRef.current.video.videoWidth;
          const videoHeight = webcamRef.current.video.videoHeight;
    
          // Set video width
          webcamRef.current.video.width = videoWidth;
          webcamRef.current.video.height = videoHeight;
    
          // Set canvas height and width
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;
    
          // 4. TODO - Make Detections
          
    
          const face = await net_face.estimateFaces(video);
          // console.log(face);
          
    
          // Draw mesh
          const ctx = canvasRef.current.getContext("2d");
    
          // 5. TODO - Update drawing utility
          
          drawMesh(face,ctx);
          const obj = await net.detect(video);
          props.setPrediction(obj)
    
          drawRect(obj, ctx);
        }
      };
    
      useEffect(()=>{
        runCoco()
      },[]);
      // useEffect(()=>{
      //   console.log(props.prediction.length)
      //   const Objects=[]
      //   for(var i=0;i<props.prediction.length;i++){
      //     console.log(props.prediction[i].class)
      //     // var str = props.prediction[0].join(' ')+'.';
      //     // console.log(str);
      //   }
      // })
          return (
        <div className="Detect">
          <header className="Detect-header">
            <Webcam
              ref={webcamRef}
              muted={true} 
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 0,
                height: 0,
              }}
            />
    
            <canvas
              ref={canvasRef}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 8,
                width: 0,
                height: 0,
              }}
            />
          </header>
        </div>
      );
}
export default Detect;