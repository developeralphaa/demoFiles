import * as axios from 'axios'
import React, { useState, useEffect } from 'react';
import './styles.scss'
import Card from '../../components/Card'
import API from '../../utils'

  const [textboxSpanList, setTextboxSpanList] = useState([<span className="indent"> {" "} </span>]);

  return (
    <div className='askalphaa-parent'>
      <div className="parentTextbox Text">
        <div
          className="howdy"
          id="search-bar"
          contentEditable="true"
        >
          <Card />
        </div>
        <div className='mic-container'>
          <Mic />
        </div>
      </div>
    </div>
  );
}
