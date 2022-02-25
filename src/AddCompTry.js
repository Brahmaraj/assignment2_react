import React from 'react';
import { useState } from 'react'; 
import { Button } from './Button'; 
import {ListComponent}  from './ListComponent'; 

function App() { 
  
  const [components, setComponents] = useState(["Mercury"]); 
  const [componentNames, setComponentNames] = useState([ 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ]); 
  
  function addComponent() { 
    
    if (componentNames.length > 0) { 
      
      setComponents([...components, componentNames[0]]);
      componentNames.splice(0, 1);
      
    } else { 
      
      window.alert("No more planets to add!");
      
    } 
    
  } 
  
  return ( 
    
    <div> 
    
      <Button onClick={addComponent} text="Call Component"/> 
      {components.map((item, i) => ( <ListComponent text={item} /> ))} 
      
    </div> 
    
  ) 
  
} 

export default App;