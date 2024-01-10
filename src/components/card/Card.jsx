import icon from '/img/icon-dice.svg';
import dividerDesktop from '/img/pattern-divider-desktop.svg'
import dividerMobile from '/img/pattern-divider-mobile.svg'

import { useState, useEffect } from 'react';
import axios from 'axios';        
export const Card = () => {
         const [advice,  setAdvice] = useState("")
         const  getAdvice = async() =>{
            const response = await axios.get("https://api.adviceslip.com/advice");
            const advice = await response.data.slip;
            setAdvice(advice)
            }
            useEffect(() =>{
              getAdvice()
         }, [])
    return (
        <div className="card">
            <p> ADVICE #{advice.id}</p>
            <h2>"{advice.advice}"</h2>
            <img src={dividerDesktop} className="divider-desktop" alt="divider"  />
            <img src={dividerMobile} className="divider-mobile" alt="divider" />
            <div className="dice"  onClick={getAdvice} >
                <img src={icon} alt="dice"/>
            </div>
        </div>
    )

}