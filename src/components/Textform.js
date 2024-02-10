import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.alerttt("Converted to Uppercase","success");

  }

  const clearClick = () =>{
       setText("")
  }
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.alerttt("Converted to Lowercase", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  }

  const [Text, setText] = useState("This isn't a text box!");
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  const [btnText, setbtnText] =useState("enable light mode")


  const themeChangeClick = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setbtnText("enable light mode")
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setbtnText("enable dark mode")


    }
  }

  return (
    <>
      <div>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1"  className="form-label">Example textarea</label>
          <textarea className="form-control"  value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black'  }} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className='btn-success' onClick={handleUpClick}>Change to Uppercase</button>
        <button type="submit" className='btn-primary ms-5' onClick={handleLoClick}>Change to Lowercase</button>
        <button type="submit" className='btn-primary ms-5' onClick={clearClick}>Clear Text</button>

        </div>
        
      </div>

      <div className="container"  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Right Text </h1>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} time read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something in the textbox above to preview it here " }</p>
      </div>

      <div className="container" style={myStyle}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne" >
              <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo" >
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="mt-5 btn btn-primary"  onClick={themeChangeClick}>{btnText}</button>
      </div>
    </>
  );
}
