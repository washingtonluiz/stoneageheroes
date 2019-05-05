import axios from 'axios';

function fetchHeroes(content) {
    return axios.get(`/api/2557663390919470/${content}`)
}

export default fetchHeroes;