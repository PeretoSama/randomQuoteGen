import { MouseEventHandler, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { QuoteBox } from './components'
import axios from 'axios';
import {AxiosResponse} from "axios"
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { SassColor } from 'sass';


export interface RandomQuote {
  _id:          string;
  content:      string;
  author:       string;
  tags:         string[];
  authorSlug:   string;
  length:       number;
  dateAdded:    Date;
  dateModified: Date;
}


function App() {
  const[quoteData, setQuoteData]=useState<RandomQuote>(Object);

 useEffect(() => {

  const root=document.documentElement;
  axios
  .get<RandomQuote>("https://api.quotable.io/random")
  .then((response:AxiosResponse)=>{
    console.log(response.data)
    setQuoteData(response.data)
  });
 }, []);

 function refreshPage(){
  window.location.reload();
 }
 function randomColor(brightness:number){
  function randomChannel(brightness:number){
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length==1) ? '0'+s : s;
  }
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}
  let color:string=randomColor(0.1);
  
 
  return (
    
    <div className="App" style={{backgroundColor:color}}>
      <QuoteBox onClickFunc={refreshPage} content={quoteData.content} author={quoteData.author} myColor={color}/>
    </div>
  )
}

export default App
