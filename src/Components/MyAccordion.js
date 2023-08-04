import React, { useState } from 'react'

const MyAccordion = ({ question, answer }) => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='divdiv'>
                <div className='main_heading'>
                    <p onClick={() => { setShow(!show) }}>{show ? '-' : '+'}</p>
                    <h3>{question}</h3>
                </div>
                {show && <p className='answer'>{answer}</p>}
            </div>
        </>
    )
}

export default MyAccordion