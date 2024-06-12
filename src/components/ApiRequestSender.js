import axios from "axios";

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Ajuste a URL base conforme necessário
});

export const fetchWords = async () => {
    try {
        const response = await api.get(
            API_URL + '/getAll');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar palavras:', error);
    }
};

export const handleAddWord = async (newWord) => {
    try {
        const response = await api.post(API_URL + '/addWord', newWord);
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar palavra:', error);
    }
}

export const updateWord = async (updatedWord) => {
    try {
        const response = await api.patch(API_URL + '/updateWord/' + updatedWord._id, updatedWord);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar palavra:', error);
    }
}

export const deleteWord = async (wordId) => {
    try {
        const response = await api.delete(API_URL + '/removeWord/' + wordId);
        return response.data;
    } catch (error) {
        console.error('Erro ao remover palavra:', error);
    }
}