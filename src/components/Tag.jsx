import React from 'react'
import "./Tag.css"
function Tag({tagName, selectTag, selected}) {
  const tagStyle = {
    DSA:{backgroundColor:"#fda821"},
    WebD:{backgroundColor:"#15d4c8"},
    Reasoning:{backgroundColor:"#ffd12c"},
    Current_Affairs:{backgroundColor:'#4cdafc'},
    default:{backgroundColor:"#f9f9f9"},
  }
  return  (<button 
    style={selected?tagStyle[tagName]:tagStyle.default} type='button' className='tag' onClick={()=>
    selectTag(tagName)
  }>{tagName}</button>
);
};

export default Tag;
