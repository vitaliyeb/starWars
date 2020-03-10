import React, {useState} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-services";
import {PersonList, PersonDetails, StarshipDetails, StarshipList, PlanetList, PlanetDetails} from "../sw-components";
import { SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "../mian/main";


import './app.css';


export default class App extends React.Component{
    constructor(){
        super();

        this.swapiService = new SwapiService();

        this.state = {
            showRandomPlanet: true
        };
    }

    render() {

        return (
            <div>
                <SwapiServiceProvider value={this.swapiService} >
                    <Router>
                        <Header />
                        <RandomPlanet />



                        <Switch >
                            <Route path='/people/' exact component={PersonList} />

                            <Route path='/people/:id' render={({match:{params: {id}}})=>{
                                return(<PersonDetails itemId={id}/>)
                            }} />

                            <Route path='/planets/' exact component={PlanetList} />

                            <Route path='/planets/:id' render={({match:{params: {id}}})=>{
                                return(<PlanetDetails itemId={id}/>)
                            }} />


                            <Route path='/starships/' exact component={StarshipList} />

                            <Route path='/starships/:id' render={({match:{params: {id}}})=>{
                                return(<StarshipDetails itemId={id}/>)
                            }} />

                            <Route component={Main}/>
                        </Switch>



                    </Router>
                </SwapiServiceProvider>
            </div>
        );
    }
};

