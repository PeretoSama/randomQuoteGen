import React, { MouseEventHandler } from 'react';
import { ShareQuoteIcon } from '../ShareQuoteIcon';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faTumblrSquare } from '@fortawesome/free-brands-svg-icons'
import styles from './QuoteBox.scss';

export interface QuoteBoxProps {
  content: string;
  author: string;
  onClickFunc: MouseEventHandler
  myColor: string;
}


export function QuoteBox({ content, author, onClickFunc, myColor }: QuoteBoxProps) {
  function textToTweetIntent(text: string): string {
    let tweetText: string = text;
    tweetText = tweetText.replace(/ /g, "%20");

    return tweetText;
  }
  console.log(typeof (content));
  let tweetContent: string = "text=";
  try {
    tweetContent += textToTweetIntent(content);
    tweetContent+="- "
    tweetContent+=textToTweetIntent(author);
  } catch (error) { }

  return (<div
    className="QuoteBox"
    id="quote-box">

    <div className='wrapper1'>
      <h1 id="text" style={{ color: myColor }}>{content}</h1>
      <div className="author">
        <p id="author" style={{ color: myColor }}>{author}</p>
      </div>
    </div>
    <div className="wrapper2">
      <div className="iconsWrapper">
        <ShareQuoteIcon id="tweet-quote" icon={faTwitterSquare} href={"https://twitter.com/intent/tweet?" + tweetContent} myColor={myColor} />
        <ShareQuoteIcon id="tumblr-quote" icon={faTumblrSquare} href={"https://*.tumblr.com/post/*"} myColor={myColor} />
      </div>
      <div className="newQuote">
        <button id="new-quote" onClick={onClickFunc} style={{ backgroundColor: myColor }}>New Quote</button>
      </div>

    </div>


  </div>);
}
