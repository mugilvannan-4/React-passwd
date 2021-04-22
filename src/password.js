import { computeHeadingLevel } from '@testing-library/dom';
import React, { useState } from 'react';
import keylogo from './key-new.png'

function Password() {
    const options = ["6","7","8","9","10","11","12","13","14","15","16"];
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState("16");
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [lowercaseCharacters, setLowercaseCharacters] = useState(false);
    const [uppercaseCharacters, setUppercaseCharecters] = useState(false);

    function handleChange(event) {
        console.log("passwrord length:" + event.target.value)
        setPasswordLength(event.target.value)
    }

    function numberChange(event) {
        console.log("Include Numbers:" + event.currentTarget.checked)
        setIncludeNumbers(event.currentTarget.checked)
    }
    function lowercaseChange(event) {
        console.log("Lower Case: " + event.currentTarget.checked)
        setLowercaseCharacters(event.currentTarget.checked)
    }
    function uppercaseChange(event) {
        console.log("Upper Case: " + event.currentTarget.checked)
        setUppercaseCharecters(event.currentTarget.checked)
    }
    function symbolChange(event) {
        console.log("Symbol: " + event.currentTarget.checked)
        setIncludeSymbols(event.currentTarget.checked)
    }
    function generatePassword(e) {
        e.preventDefault();
        console.log("Generate password")
        if(includeNumbers === true || includeSymbols === true|| lowercaseCharacters === true ||  uppercaseCharacters === true)
        {
            var numbers = "1234567890";
            var symbols = "!@#$%^&*()-+<>";
            var lowercase = "abcdefghijklmnopqrstuvwxyz";
            var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var chars = "";
            var pass = "";
            console.log(includeNumbers, includeSymbols, lowercaseCharacters, uppercaseCharacters);
            if(includeNumbers === true){
                chars = chars + numbers;
            }
            console.log(chars);
            if(includeSymbols === true){
                chars = chars + symbols;
            }
            if(lowercaseCharacters === true){
                chars = chars + lowercase;
            }
            if(uppercaseCharacters === true){
                chars = chars + uppercase;
            }
            console.log(chars);
            
            for (var x = 0; x < passwordLength; x++) {
                var i = Math.floor(Math.random() * chars.length);
                pass += chars.charAt(i);
            }
            setPassword(pass);
        }
        else
        {
        setPassword('');    
        }     
     }
 
    return(
        <div className="container">
          <form>
                <div className="header" >
                  <img src={keylogo} alt="Secure Random Password Generator"/>
                  <h1>Secure Password Generator</h1>
                </div>
   
          <div className="sec_options">
          <div className="length">
                 <label>
                     Password Length:    
                 </label>
                 <select
                    value={passwordLength}

                    onChange={handleChange}>
                     {options.map((option) => (
                     <option key={option} value={option}>
                     {option}
                    </option>
                     ))}
                 </select>
            </div>
            <div className="numbers">
                    <label>
                        Include Numbers:
                    </label>
                    <input
                        name="includeNumbers"
                        type="checkbox"
                        defaultChecked={includeNumbers}
                        onChange={numberChange} />    
            </div>
            <div className="lowercase">
                    <label>
                       LowerCase: 
                    </label>
                    <input
                        name="lowercaseCharacters"
                        type="checkbox"
                        defaultChecked={lowercaseCharacters}
                        onChange={lowercaseChange} />   
            </div>
            </div>
            <div className="uppercase">
                    <label>
                       UpperCase:
                    </label>
                    <input
                        name="uppercaseCharacters"
                        type="checkbox"
                        defaultChecked={uppercaseCharacters}
                        onChange={uppercaseChange} />
            </div>
            <div className="symbols">
                    <label>
                       Symbols:
                    </label>
                    <input
                        name="includeSymbols"
                        type="checkbox"
                        defaultChecked={includeSymbols}
                        onChange={symbolChange} />
            </div>
            <div>
            <button className="submit submit1" onClick={(e)=>generatePassword(e)}>Generate Password</button>
            </div>
            <div className="result">{password}</div>
            </form>
            
        </div>           
    )
}

export default Password