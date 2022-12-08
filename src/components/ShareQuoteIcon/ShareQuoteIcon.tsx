import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './shareQuoteIcon.scss';

export interface ShareQuoteIconProps {
  id:string;
  icon:IconDefinition;
  href:string;
  myColor:string
}

export function ShareQuoteIcon({id, icon,href,myColor}: ShareQuoteIconProps) {
  return (
  <div 
  className="ShareQuoteIcon">
    <a id={id} href={href} target="_blank">
    <FontAwesomeIcon icon={icon} href={href} color={myColor}/>
    </a>
  </div>);
}
