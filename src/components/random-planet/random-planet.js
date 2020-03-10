import React, { Component } from 'react';
import Spinner from "../spinner/spinner";
import './random-planet.css';
import PlanetView from "./planet-view";
import ErrorMessage from "../error-message/error-message";
import withSwapService from "../hoc-helpers/with-swapi-service";

const planet = (props)=> {
  return class Planet extends Component {
    constructor() {
      super();
      this.state = {
        planet: {},
        error: false,
        loading: true
      };

      this.planetInterval = null;

      this.onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false})
      }

      this.onError = (err) => {
        this.setState({error: true, loading: false})
      }

      this.updatePlanet = () => {
        const id = Math.floor(Math.random() * 18) + 2;
        this.props.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
      }
    }

    componentDidMount() {
      this.updatePlanet()
      this.planetInterval = setInterval(() => this.updatePlanet(), 4000)
    }

    componentWillMount() {
      clearInterval(this.planetInterval)
    }


    render() {
      const {planet, loading, error} = this.state;

      const hasData = !(error || loading);

      const content = hasData ? <PlanetView planet={planet}/> : null;
      const errorMessage = error ? <ErrorMessage/> : null;
      const loader = loading ? <Spinner/> : null;


      return (
          <div className="random-planet jumbotron rounded">
            {content}
            {errorMessage}
            {loader}
          </div>
      );
    }
  }
}


const RandomPlanet = withSwapService(
    planet(),
    ({getPlanet})=> ({getPlanet})
)

export default RandomPlanet;