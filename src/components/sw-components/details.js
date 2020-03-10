import React from "react";
import ItemDetails, {Record} from "../item-details";

import withSwapService from "../hoc-helpers/with-swapi-service";


const PersonItem = (props)=> {
    return (
        <ItemDetails {...props}>

            < Record field='gender' label='Gender' />
            < Record field='birth_year' label='Birth year' />
            < Record field='height' label='Height' />
            < Record field='mass' label='Mass' />
            < Record field='hair_color' label='Hair color' />
            < Record field='skin_color' label='Skin color' />
            < Record field='birth_year' label='Birth year' />

        </ItemDetails>
    )
}
const PersonDetails = withSwapService(PersonItem, ({getPerson, getPersonImage}) => ({getData: getPerson, getImageUrl: getPersonImage}));

const PlanetItem = (props)=> {
    return (
        <ItemDetails {...props}>
            < Record field='orbital_period' label='Orbital period' />
            < Record field='rotationPeriod' label='Rotation period' />
            < Record field='population' label='Population' />
            < Record field='climate' label='climate' />
            < Record field='gravity' label='Gravity' />
            < Record field='terrain' label='Terrain' />
            < Record field='surface_water' label='Surface water' />
            < Record field='population' label='Population' />
            < Record field='diameter' label='Diameter' />
        </ItemDetails>
    )
}
const PlanetDetails = withSwapService(PlanetItem, ({getPlanet, getPlanetImage}) => ({getData: getPlanet, getImageUrl: getPlanetImage}));


const StarshipItem = (props) => {
    return (
        <ItemDetails {...props}>

            < Record field='model' label='Model' />
            < Record field='length' label='Length' />
            < Record field='manufacturer' label='Manufacturer' />
            < Record field='cost_in_credits' label='Cost in credits' />
            < Record field='max_atmosphering_speed' label='Max atmosphering speed' />
            < Record field='crew' label='Crew' />
            < Record field='passengers' label='Passengers' />
            < Record field='cargo_capacity' label='Cargo capacity' />
            < Record field='consumables' label='Consumables' />
            < Record field='hyperdrive_rating' label='Hyperdrive rating' />
            < Record field='MGLT' label='MGLT' />
            < Record field='starship_class' label='Starship class' />
        </ItemDetails>
    )
}
const StarshipDetails = withSwapService(StarshipItem, ({getStarship, getStarshipImage}) => ({getData:getStarship, getImageUrl:getStarshipImage}))




export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};

