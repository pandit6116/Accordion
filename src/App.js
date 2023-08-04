import React, { useState } from 'react'
import Questions from './Components/api'
import MyAccordion from './Components/MyAccordion';

function App() {
  const [data, setData] = useState(Questions)



  return (
    <>
      <div className='main_div'>
        <h1>Interview Questions</h1>
        {data.map((curElem) => {
          return <MyAccordion key={curElem.id} {...curElem} />
        })}
      </div>
    </>
  );
}

export default App;
