import React from 'react';
import Word from './Word';
import CategoriaSelect from "./CategoriaSelect"; // Certifique-se de que o caminho do import está correto

const WordList = ({ onWordChange, onDelete, onSentenceSave, onCategoriaChange, words, language }) => {
    return (
        <div>
            <div className={"row justify-content-center"}>
                <div className={"d-flex justify-content-center col-3"}>
                    <h2 className={"my-2"}>Palavras Aprendidas:</h2>
                </div>
                <div className="my-2 col-2">
                    <CategoriaSelect onCategoriaChange={onCategoriaChange}/>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                {words.map((word) => (
                    <div key={word.id} className="col-md-3 mb-4">
                        <Word onWordChange={onWordChange} onDelete={onDelete} onSentenceSave={onSentenceSave} word={word} language={language} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WordList;