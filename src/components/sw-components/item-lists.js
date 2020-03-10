import React from "react";
import ItemList from "../item-list/item-list";
import withData from "../hoc-helpers/withData";
import withChildFunction from "../hoc-helpers/withChildFunction";
import withSwapService from "../hoc-helpers/with-swapi-service";

import{withRouter} from 'react-router-dom'

const renderName = ({name}) => <span>{name}</span>




let Person =  withSwapService(
                    withData(
                        withChildFunction(ItemList, renderName )
                    ),
                    ({getAllPeople})=> ({getData: getAllPeople})
                );

let Planet = withSwapService(
                    withData(
                        withChildFunction(ItemList, renderName)
                    ),
                    ({getAllPlanets})=> ({getData: getAllPlanets})
                );
let Starship = withSwapService(
                        withData(
                            withChildFunction(ItemList, renderName)
                        ),
                        ({getAllStarships})=> ({getData: getAllStarships})
                    );

const PersonList = withRouter(({history})=>{
    return <Person setItem={(id)=>history.push(id)} />
})

const PlanetList = withRouter(({history})=>{
    return <Planet setItem={(id)=>history.push(id)} />
})

const StarshipList = withRouter(({history})=>{
    return <Starship setItem={(id)=>history.push(id)} />
})


export {
    PersonList,
    PlanetList,
    StarshipList
};