// import { getElementError } from "@testing-library/react";
import React, { useState } from "react";


export default function TextFormx(props) {
  const [text, setText] = useState("enter your text here");
  const handleupconvert = () => {
    console.log("upper case converter clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted To UpperCase","Success");
  };
  const handlelcconvert = () => {
    console.log("lower case converter clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted To LowerCase","Success");
  };
  const handelcopy = () => {
    console.log("copy text clicked");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied","Success");
  };
  const handelclear = () => {
    // console.log("text Cleared");
    props.showalert("Text Cleared","Success");

    setText("");
    
  };
  function handelcapital(text) {
    let word = text.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return word.join(" ");
    
  }
  const handelcapital1 = () => {
    console.log("capitalized clicked");
    let w = handelcapital(text);
    setText(w);
    props.showalert("Text Capitalized","Success");
  };

  const handlechange = (event) => {
    handelclear();
    console.log("on change");
    setText(event.target.value);
  };
  function rmvsp(text) {
    let word = text.split("  ").join(" ");
    return word;
  }
  function rmvsp1(text) {
    let word = text.split(" ").join("");
    return word;
  }
  const handelrmvsp = () => {
    // let word = text.split(" ").join("");
    // setText(word);
    console.log("space remover clicked");
    let i = 0;
    if (i === 0) {
      let t1 = rmvsp(text);
      setText(t1);

      i = 1;
    } else {
      let t = rmvsp1(text);
      setText(t);
      i = 0;
    }
    props.showalert("White-Space Removed","Success");
  };

  return (
    <>
      <div
        className="container my-3 mx-3"
        style={{ color: props.mode === "dark" ? "white" : "#002F6C" }}
      >
        <h1>{props.heading}</h1>
        <div >
          <textarea
            className="form-control"
            value={text}
            onChange={handlechange}
            style={{
              backgroundColor: props.mode === "dark" ? "#cfe2ff" : "white",
              color: props.mode === "dark" ? "black" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
      </div>
      <div className="container my-3  mx-3">
        <button className={`btn btn-${props.mode} mx-2 my-1`} onClick={handleupconvert}>
          convert to uppercase
        </button>
        <button className={`btn btn-${props.mode} mx-2 my-1`} onClick={handlelcconvert}>
          convert to lowercase
        </button>
        <button className={`btn btn-${props.mode} mx-2 my-1`} onClick={handelcopy}>
          Copy text
        </button>
        <button className={`btn btn-${props.mode} mx-2 my-1`} onClick={handelcapital1}>
          Capitalize
        </button>
        <button className={`btn btn-${props.mode} mx-2 my-1`}onClick={handelclear}>
          Clear text
        </button>
        <button className={`btn btn-${props.mode} mx-2 my-1`}onClick={handelrmvsp}>
          remove extra space
        </button>
      </div>

      <div className="container my-3  mx-3"style={{ color: props.mode === "dark" ? "white" : "#002F6C" }}>
        <h1>Text Summary</h1>
        <div class="list-group list-group-horizontal-xxl">
          <ul className="list-group list-group-horizontalxl">
            <li className="list-group-item list-group-item-primary">
              <p>
                <b>
                  words : {text.split(" ").filter((element)=>{return element.length!==0}).length} characters : {text.length}{" "}
                  Time taken : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}
                </b>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
