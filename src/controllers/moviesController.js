import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class Movies {
    static showMovieList = async (req, res, next) => {
        const paramsToSearch = defineParams(req);
        const result = await getMovieList(paramsToSearch);
        if(result) {
            res.status(200).send({ resultados: returnFirstTenMovies(result) })
        } else {
            res.status(500).send('Erro inesperado no servidor')
        }
    }
}

function defineParams(req) {
    const { api_key = process.env.API_KEY, regiao, page, year, sorter } = req;

    let params = {};

    if(api_key) params['api_key'] = api_key;
    if(regiao) params['region'] = regiao;
    if(page) params['page'] = page;
    if(year) params['year'] = year;
    if(sorter) params['sort_by'] = sorter;

    return params;
}

function getMovieList(params) {
    const url = process.env.BASE_URL + '/discover/movie';

    const result = axios({
        method: "GET",
        url,
        params
    });

    return result;
}

function returnFirstTenMovies(moviesAvailable) {
    const loopTimes = moviesAvailable['data']['results'].length > 10 ? 10 : moviesAvailable['data']['results'].length

    let movieList = []
    for(let i = 0; i < loopTimes; i++) {
        movieList.push(moviesAvailable['data']['results'][i]['title'])
    }
    
    return movieList;
}

export default Movies;