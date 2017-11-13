import axios from 'axios';
export const FETCH_EXPLORE='fetch_explore';
export const FETCH_REPOS='fetch_repos';
export const FETCH_LANG='fetch_lang';
export const SEARCH_TERM='search_term';

const exploreUrl='http://localhost:3000/explore';
const repoUrl='http://localhost:3000/repos/language';
const searchTerm='http://localhost:3000/repos/language/search';

export function fetchExplore(){    
const request = axios.get(exploreUrl);    
    return{
        type:FETCH_EXPLORE,
        payload:request
    }
}

export function fetchRepos(item,page){
    const request=axios.get(`${repoUrl}?lang=${item.name}&page=${page}`);
    return{
        type:FETCH_REPOS,
        payload:request
    }
}

export function fetchLanguage(item){
    console.log('action item:'+item.name);
    return{
        type:FETCH_LANG,
        payload:item.name
    }
}

export function searchRepo(term,lang){
    const request=axios.get(`${searchTerm}?repo=${term}&lang=${lang}`);
    console.log(request);
    return{
        type:SEARCH_TERM,
        payload:request
    }
}