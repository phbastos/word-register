import React, {useEffect, useState} from 'react';
import Header from './Header';
import AddWordForm from './AddWordForm';
import WordList from './WordList';
import {deleteWord, fetchWords, getSentences, handleAddWord, saveSentence, updateWord} from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [words, setWords] = useState([
        { language: 'japones', word: 'こんにちは', definition: 'Olá', observacao: '', sentences: ['teste1', 'teste2'], categoria: 'teste' },
        { language: 'italiano', word: 'Ciao', definition: 'Obrigado', observacao: '', sentences: ['teste3', 'teste4'], categoria: 'teste' },
    ]);
    const [language, setLanguage] = useState('japones');
    const [loading, setLoading] = useState(true);
    const [categoria, setCategoria] = useState('verbo');
    const [sentences, setSentences] = useState([]);

    useEffect(() => {
        const loadWords = async () => {
            try {
                const wordsData = await fetchWords();
                console.log('Words fetched:', wordsData);
                setWords(wordsData);
            } catch (error) {
                console.log('Erro ao buscar palavras:', error);
                // Handle error appropriately
            } finally {
                setLoading(false); // Carregamento completo
            }
        };

        loadWords();
    }, []);

    useEffect(() => {
        const loadSentences = async () => {
            try {
                const sentencesData = await getSentences();
                console.log('Sentences fetched:', sentencesData);
                setSentences(sentencesData);
            } catch (error) {
                console.log('Erro ao buscar sentences:', error);
                // Handle error appropriately
            }
        };

        loadSentences();
    }, []);

    const handleAddWordWrapper = async (newWord) => {
        if (newWord.word === '' || newWord.definition === '') {
            return; // Não permitir adicionar palavras sem palavra ou definição
        }
        try {
            const addedWord = await handleAddWord(newWord);
            console.log('Word added:', addedWord);
            setWords([...words, addedWord]);
        } catch (error) {
            console.log('Erro ao adicionar palavra:', error);
            // Handle error appropriately
        }
    };

    const handleUpdateWord = async (updatedWord) => {
        try {
            const updated = await updateWord(updatedWord);
            console.log('Word updated:', updated);
            const updatedWords = words.map((word) => word._id === updated._id ? updated : word);
            setWords(updatedWords);
        } catch (error) {
            console.error('Erro ao atualizar palavra:', error);
        }
    };

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
    };

    if (loading) {
        return <div>Loading...</div>; // Exibir um indicador de carregamento enquanto os dados estão sendo buscados
    }

    const handleCategoriaChange = (selectedCategoria) => {
        setCategoria(selectedCategoria);
    }

    const displayedWords = words.filter(word => word.language === language
        && (categoria === 'outros' ? word.categoria === '' || word.categoria === categoria : word.categoria === categoria));

    const orderedWords = displayedWords.sort((a, b) => {
        if (a.word < b.word) return -1;
        if (a.word > b.word) return 1;
        return 0;
    });

    console.log('Displayed words:', orderedWords);

    const handleSentenceSave = async (word, sentence) => {
        try {
            await saveSentence(word._id, sentence)
            setSentences([...sentences, sentence]);
        } catch (error) {
            console.error('Erro ao salvar frase:', error);
        }
    }

    return (
        <div>
            <div>
                <div className="my-3">
                    <Header onLanguageChange={handleLanguageChange} />
                </div>
                <div className="my-3">
                    <AddWordForm onAddWord={handleAddWordWrapper} language={language} />
                </div>
                {/*<div className="d-flex my-3">*/}
                {/*    <SearchBar onSearch={handleSearch} />*/}
                {/*</div>*/}
                <div className="my-3">
                    <WordList onWordChange={handleUpdateWord}
                              onDelete={handleDeleteWord}
                              onCategoriaChange={handleCategoriaChange}
                              onSentenceSave={handleSentenceSave()}
                              words={orderedWords}
                              sentences={sentences}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
