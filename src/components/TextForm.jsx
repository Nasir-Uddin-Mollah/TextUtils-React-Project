import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCapClick = () => {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }
    let newText = words.join(" ");
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpeces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };
  //   const handleOnChange = (e) => {
  //     setText(e.target.value);
  //   };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold">{props.heading}</h3>
        <div className="my-3">
          <textarea
            name="myText"
            id="myText"
            rows="8"
            value={text}
            onChange={(e) => setText(e.target.value)}
            //   onChange={handleOnChange}
            className={`block w-full rounded-md ${
              props.theme === "light-theme" ? "bg-white" : "bg-[#151631]"
            } px-3 py-1.5 text-base ${
              props.theme === "light-theme" ? "text-gray-900" : "text-gray-100"
            } outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-1
    ${text.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleUpClick}
        >
          Make Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-1
    ${text.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleLoClick}
        >
          Make Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-1
    ${text.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleCapClick}
        >
          Capitalize
        </button>
        <button
          disabled={text.length === 0}
          className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-1
    ${text.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-1
    ${text.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleExtraSpeces}
        >
          Remove Extra Speces
        </button>
        <button
          disabled={text.length === 0}
          className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-1
    ${text.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div className="my-3">
        <h3 className="text-2xl font-semibold">Your Text Summary</h3>
        <p>
          {text.split(" ").filter((element) => element.length !== 0).length}{" "}
          words and {text.replace(/\s/g, "").length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => element.length !== 0)
              .length}{" "}
          Minutes to read
        </p>
        <h3 className="text-2xl font-semibold">Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
