import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddWordForm from './AddWordForm';
import WordList from './WordList';
import SearchBar from './SearchBar';
import {fetchWords, handleAddWord, updateWord, deleteWord} from "./ApiRequestSender";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [words, setWords] = useState([
        {language: 'japones', word: 'こんにちは', definition: 'Olá', observacao: '', sentences: ['teste1', 'teste2']},
        {language: 'italiano', word: 'Ciao', definition: 'Obrigado', observacao: '', sentences: ['teste3', 'teste4']},
    ]);
    const [language, setLanguage] = useState('japones');
    const [filteredWords, setFilteredWords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWords = async () => {
            try {
                const wordsData = await fetchWords();
                setWords(wordsData);
            } catch (error) {
                console.log('Erro ao buscar palavras:', error)
                // Handle error appropriately
            } finally {
                setLoading(false); // Carregamento completo
            }
        };

        loadWords();
    }, []);

    const handleAddWordWrapper = async (newWord)  => {
        try {
            const addedWord = await handleAddWord(newWord);
            setWords([...words, addedWord]);
        } catch (error) {
            // Handle error appropriately
        }
    };

    const handleUpdateWord = async (updatedWord) => {
        try {
            const updated = await updateWord(updatedWord);
            const updatedWords = words.map((word) => word._id === updated._id ? updated : word);
            setWords(updatedWords);
        } catch (error) {
            console.error('Erro ao atualizar palavra:', error);
        }
    }

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleDeleteWord = async (word) => {
        try {
            await deleteWord(word._id);
            const updatedWords = words.filter((w) => w._id !== word._id);
            setWords(updatedWords);
        } catch (error) {
            console.error('Erro ao remover palavra:', error);
        }
    }

    const handleSentenceSave = async (word, sentence) => {
            const updatedSentences = word.sentences ? [...word.sentences, sentence] : [sentence];
            await handleUpdateWord({...word, sentences: updatedSentences});
    }

    if (loading) {
        return <div>Loading...</div>; // Exibir um indicador de carregamento enquanto os dados estão sendo buscados
    }

    const displayedWords = words.filter(word => word.language === language);

    return (
        <div>
            <div>
                <div className="my-3">
                    <Header onLanguageChange={handleLanguageChange}/>
                </div>
                <div className="my-3">
                    <AddWordForm onAddWord={handleAddWordWrapper} language={language} />
                </div>
                {/*<div className="d-flex my-3">*/}
                {/*    <SearchBar onSearch={handleSearch} />*/}
                {/*</div>*/}
                <div className="my-3">
                    <WordList onWordChange={handleUpdateWord} onDelete={handleDeleteWord} onSentenceSave={handleSentenceSave} words={displayedWords} />
                </div>
            </div>
        </div>
    );
}

export default App;
