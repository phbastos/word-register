import axios from "axios";

const API_URL = 'http://localhost:3001/api';

export const fetchWords = async () => {
    try {
        const response = await axios.get(
            API_URL + '/getAll');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar palavras:', error);
    }
};

export const handleAddWord = async (newWord) => {
    try {
        const response = await axios.post(API_URL + '/addWord', newWord);
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar palavra:', error);
    }
}

export const updateWord = async (updatedWord) => {
    try {
        const response = await axios.put(API_URL + '/updateWord/' + updatedWord._id, updatedWord);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar palavra:', error);
    }
}

export const deleteWord = async (wordId) => {
    try {
        const response = await axios.delete(API_URL + '/deleteWord/' + wordId);
        return response.data;
    } catch (error) {
        console.error('Erro ao remover palavra:', error);
    }
}

export const getSentences = async (wordId) => {
    try {
        const response = await axios.get(API_URL + '/getSentences/');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar frases:', error);
    }
}

export const saveSentence = async (wordId, sentence) => {
    try {
        const response = await axios.post(API_URL + '/addSentence/' + wordId + '/' + sentence);
        return response.data;
    } catch (error) {
        console.error('Erro ao salvar frase:', error);
    }
}