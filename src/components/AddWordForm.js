import {useState} from "react";

const AddWordForm = ({ onAddWord, language }) => {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [observacao, setObservacao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddWord({ language, word, definition, observacao });
        setWord('');
        setDefinition('');
        setObservacao('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row my-2">
                <div className="col">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Digite a palavra"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Digite a definição"
                        value={definition}
                        onChange={(e) => setDefinition(e.target.value)}
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Observações"
                        value={observacao}
                        onChange={(e) => setObservacao(e.target.value)}
                    />
                </div>
                <div className="row d-flex justify-content-center my-2">
                    <button type="submit" className="btn btn-outline-success col-6 justify-content-center">Adicionar Palavra</button>
                </div>
            </div>
        </form>
    );

}

export default AddWordForm

