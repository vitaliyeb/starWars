export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if(!response.ok) throw new Error(`ошибка при запросе на ${this._apiBase}${url}`);
        return await response.json();
    }

    getAllPeople = async () => {
        const body = await this.getResource(`/people/`);
        return body.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person =  await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const body = await this.getResource(`/planets/`);
        return body.results.map(this._transfornPlanet)
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transfornPlanet(planet);
    }

    getAllStarships = async () => {
        const body = await this.getResource(`/starships/`);
        return body.results.map(this._transformStarships);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarships(starship)
    }
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }
    _transfornPlanet = (planet) => {
        return{
            ...planet,
            id: this._extractId(planet),
        }
    }
    _transformStarships = (starships) =>{
        return {
            ...starships,
            id: this._extractId(starships),
        }
    }
    _transformPerson = (persons) => {
        return{
            ...persons,
            id: this._extractId(persons),
        }
    }
    getPersonImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }
    getStarshipImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }
    getPlanetImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }
}