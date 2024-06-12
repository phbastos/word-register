import React, { useState } from 'react';
import ModalSentences from './ModalSentences';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Word({ word, onWordChange, onDelete, onSentenceSave }) {
    const [showDefinition, setShowDefinition] = useState(false);
    const [showObservacao, setShowObservacao] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleToggleDefinition = () => {
        setShowDefinition(!showDefinition);
        setShowObservacao(!showObservacao);
    };

    const handleDelete = () => {
        onDelete(word);
    };

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        onWordChange({ ...word, word: e.target.value });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };

    const handleSentenceSave = (sentence) => {
        onSentenceSave(word, sentence);
    };

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="palavra card-header bg-success text-light text-center h5 font-bold d-flex">
                <div className="col-11">
                    {isEditing ? (
                        <input
                            type="text"
                            value={word.word}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onKeyPress={handleKeyPress}
                            autoFocus
                            className="form-control"
                        />
                    ) : (
                        <span onDoubleClick={handleDoubleClick}>
                            {word.word}
                        </span>
                    )}
                </div>
                <div className="justify-content-end">
                    <i onClick={handleDelete} className="bi bi-x-octagon"></i>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-center align-middle" style={{ height: '40px' }}>
                    {showDefinition && <p className="card-text f6"><b>Definição:</b> {word.definition}</p>}
                </li>
                <li className="list-group-item text-center align-middle" style={{ height: '60px' }}>
                    {showObservacao && word.observacao !== '' && <p className="card-text lh-1"><b>Observacao:</b> {word.observacao}</p>}
                </li>
                <li className="list-group-item card-footer text-center">
                    <button onClick={handleToggleDefinition} className="btn btn-outline-success mx-3">
                        {showDefinition ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                    </button>
                    <ModalSentences word={word} sentences={word.sentences} onSentenceSave={handleSentenceSave} />
                </li>
            </ul>
        </div>
    );
}

export default Word;
