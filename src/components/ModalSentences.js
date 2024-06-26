import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalSentences({ word, sentences, onSentenceSave }) {
    const [sentence, setSentence] = useState('');

    const handleSave = () => {
        if (sentence.trim()) {
            onSentenceSave(word, sentence); // Passa a nova sentença para a função onSentenceSave
            setSentence('');
        }
    };

    const displayedSentences = sentences.filter((sentence) => sentence.wordId === word._id);

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-success mx-3"
                data-bs-toggle="modal"
                data-bs-target="#sentencesModal"
            >
                <i className="bi bi-card-text"></i>
            </button>

            <div
                className="modal fade border-1"
                id="sentencesModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-success text-light">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Frases com {word.word}</h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {sentences ? sentences.map((sentence) => (
                                    <div key={sentences.indexOf(sentence)} className="mb-4">
                                        {displayedSentences.sentence}
                                    </div>
                                )
                            ) : (
                                <p>Sem frases disponíveis.</p>
                            )}
                            <div className="mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite a nova frase"
                                    value={sentence}
                                    onChange={(e) => setSentence(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button onClick={handleSave} type="submit" className="btn btn-success">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalSentences;
