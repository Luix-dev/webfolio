import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar'
import "./Sem2_cs.scss";
import { Unity, useUnityContext } from "react-unity-webgl";

function Sem2_cs() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({    
    loaderUrl: "/webgl/StreamingAssets.loader.js",
    dataUrl: "/webgl/StreamingAssets.data",
    frameworkUrl: "/webgl/StreamingAssets.framework.js",
    codeUrl: "/webgl/StreamingAssets.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  

  return (
    <div>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="page_cswrapper">
        <h1>Computer Science</h1>
        <p className='warningtext-mobile'>
          All the topics in the Computer Science Core Modules are inside a unity terminal game. 
          Sadly the Smartphone-web-terminal experience is terrible, 
          that's why it's hidden for your own good.
        </p>
        <div className="container">
          {isLoaded === false && (
            <p>Loading... ({loadingPercentage}%)</p>
          )}
          <Unity className="unity" unityProvider={unityProvider}/>
        </div>
        <div className='middle-div'>
          <p className='normal-text'>
            Simple instuctions in case it wont work for you:
            <br />
            1. type  ls
            <br />
            2. type cd and a foldername, example: cd security
            <br />
            3. just press enter until it's done.
            <br />
            Tip: If problems occur, type: clear
          </p>
        </div>
      </div>
        
    </div>
  )
}

export default Sem2_cs