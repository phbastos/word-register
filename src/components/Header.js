// Header.js
import React from 'react';
import '../App.css'

function Header({ onLanguageChange }) {
    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        onLanguageChange(selectedLanguage);
    };

    return (
        <header>
            <div className="col mb-3 bg-body-secondary d-flex justify-content-center">
                <h1 className={"text-success-emphasis header p-4"}>Word reminder</h1>
            </div>
            <div className="col-2 justify-content-center">
                <div className={"d-flex justify-content-center"}>
                    <label htmlFor="language-select">Idioma:</label>
                </div>
                <select id="language-select" className="form-select form-select-sm" onChange={handleLanguageChange}>
                    <option selected value="japones">Japonês</option>
                    <option value="italiano">Italiano</option>
                    <option value="ingles">Inglês</option>
                </select>
            </div>
        </header>
    );
}

export default Header;
