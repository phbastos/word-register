import React, {useState} from "react";

const AddWordForm = ({ onAddWord, language }) => {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [observacao, setObservacao] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddWord({ language, word, definition, observacao, categoria });
        setWord('');
        setDefinition('');
        setObservacao('');
        setCategoria('');
    };

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
    }

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
                <div className='col'>
                    <select id="categoria-select" className="form-select form-select-sm" onChange={handleCategoriaChange}>
                        <option disabled selected value="selecione">Selecione uma categoria</option>
                        <option value="verbo">Verbo</option>
                        <option value="adjetivo">Adjetivo</option>
                        <option value="subtantivo">Substantivo</option>
                        <option value="saudacooes">Saudações</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
                <div className="row d-flex justify-content-center my-2">
                    <button type="submit" className="btn btn-outline-success col-6 justify-content-center">Adicionar Palavra</button>
                </div>
            </div>
        </form>
    );

}

export default AddWordForm

