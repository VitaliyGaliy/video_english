import { useEffect, useRef, useState } from "react";
import "./index.css";

const url ="https://stream.voidboost.cc/140016a18bcec77ab3bf319b573946c7:2022092514:NTRWL2dJTEpQNWZMbS9Xak5acDNLS3dVNnNzb0g4QzV3aC84TlZRdVJneWR4RHQrYVo1Sm9KWldXT3I2a0pVOUFPcUdBZm5CTTdocXhkSmVpZ2RVenc9PQ==/4/9/8/3/6/1/l60r4.mp4:hls:manifest.m3u8.mp4"

const subEng='https://static.voidboost.com/view/eY8__AaGQ042r2XymK4vZg/1664106693/4/9/8/3/6/1/ylcekzhgwhp3.vtt'

const subUa='https://static.voidboost.com/view/3GHnwSBySY0Aw6aChE48nw/1664100931/4/9/8/3/6/1/8l75wcwj616z.vtt'

function App() {
  const videoRef = useRef()
  const [enCues, setEnCues] = useState([])
  // const [uaSub, setUaSub] = useState([])

  useEffect(() => {
    if (videoRef.current?.textTracks[0]?.mode) {
      videoRef.current.textTracks[0].mode = 'showing'
    }

    // videoRef.current.onplay = () => {
    //   console.log(videoRef.current?.textTracks[0].cues.length);
    // }
  // const cueObj=  new Object(videoRef.current?.textTracks[0].cues)

  Object.defineProperty(videoRef.current?.textTracks[0].cues, 'property1', {
    value: 42,
    writable: false
  });
    // console.log(cueObj);
    if (videoRef.current?.textTracks[0].cues.length>0) {
      console.log(videoRef.current?.textTracks[0].cues);
    }

    // const cues =new Array(videoRef.current?.textTracks[0]?.cues)
    
    // console.log('cues', cues); 
    // console.log('videoRef.current.textTracks[0].cues', videoRef.current?.textTracks[0].cues); 
  //   if (cues.length) {
  //       setEnCues(cues)
  //     // videoRef.current.textTracks[0].oncuechange = function(e) {
  //     //   var cue = this.activeCues[0];
  //     //   if(cue){
  //     //     console.log(cue);
  //     //     setEnSub([...enSub, cue])
  //     //   }
  //     // }

  //     // videoRef.current.textTracks[1].oncuechange = function(e) {
  //     //   var cue = this.activeCues[1];
  //     //   if(cue){
  //     //     console.log(cue);
  //     //     setUaSub([...uaSub, cue])
  //     //   }
  //     // }
  // }
    
  }, [videoRef])

 return (
<div className="container">
    <video crossOrigin="anonymous" ref={(instance)=>videoRef.current=instance} controls src={url}>
      <track src={subEng} kind="subtitles" lang="en" label="English"/>
      <track src={subUa} kind="subtitles" lang="ua" label="Ukraine"/>
    </video>
    <div className="subtitlecontainer">
      {enCues?.map(cue=> <div className="sub-row">{cue.text}</div>)} 
    </div>
</div>
  );
}

export default App;
