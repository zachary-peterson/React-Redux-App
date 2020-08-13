import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchCountries } from '../store';

import CountryCard from './CountryCard';

const CountriesContainer = styled.section`
    background-color: #2d545e;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin: 1% auto;
    border: 5px solid white;
`

const Body = (props) => {

    useEffect(() => {
        props.fetchCountries();
    }, [])

    console.log('this is in the body', props);

    return (
        <CountriesContainer>
        {props.isLoading ? <h4>Loading missions now...</h4> : null}
        {props.error ? (
        <p style={{ color: "red" }}>
          Uh oh... something happened 😟 {props.error}
        </p>
      ) : null}
        {props.countries.length > 0 ? props.countries.map(country => {
            console.log(country);
            return (<CountryCard className={country.name} nativeName={country.nativeName} name={country.name} capital={country.capital} region={country.region} population={country.population} demonym={country.demonym}/>)
        }) : null}
        </CountriesContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        isLoading: false,
        error: ''
    };
  };

export default connect(mapStateToProps, { fetchCountries })(Body);