import React from 'react';
import {Card} from './Card'



function App() {
  let arr=[{name:'Alejandro Olmedo', career:'Ing info' ,email:'00097017@uca.edu.sv'},
          {name:'Cesar R', career:'Ing info' ,email:'00060917@uca.edu.sv'},
          {name:'Dann', career:'Ing info' ,email:'76324632@uca.edu.sv'},
          {name:'Be M', career:'Ing industrial' ,email:'56345234@uca.edu.sv'},
          {name:'Jens', career:'Ing info' ,email:'2343246@uca.edu.sv'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weird Stuff...</h1>
        {
          arr.map((element, index)=>{
           return <Card index={index+1} name={element.name}  career= {element.career} email={element.email} />
          })
        }
      </header>
    </div>
  );
}

export default App;
