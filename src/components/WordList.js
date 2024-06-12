import React from 'react';
import Word from './Word'; // Certifique-se de que o caminho do import está correto

const WordList = ({ onWordChange, onDelete, onSentenceSave, words, language }) => {
    return (
        <div>
            <div className={"d-flex justify-content-center"}>
                <h2 className={"my-4"}>Palavras Aprendidas:</h2>
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