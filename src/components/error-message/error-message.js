import React from "react";
import './error-message.css';

export default function ErrorMessage () {
    return(
        <div className='errorMessage'>
            <img className='errorMessage__image' src="/images/gabella.png" alt=""/>
            <p className='errorMessage__description'>Мы не смогли получить информацию с сервера  :(</p>
        </div>
    )
}
