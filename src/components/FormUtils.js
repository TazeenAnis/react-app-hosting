import React, { useState } from 'react'

export default function FormUtils(props) {
    const handleChange = (event) => {
        // console.log('Changes done')
        setText(event.target.value)
    }

    const handleClick = () => {
        let updText = text.toUpperCase();
        setText(updText)
    }

    const [text, setText] = useState('Enter text here')

    return (
        <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleChange} id="" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleClick}>Uppercase</button>
            </div>
            <div className='container'>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </div>
    )
}
