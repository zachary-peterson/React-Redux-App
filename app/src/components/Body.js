import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchCountries } from '../store';

import CountryCard from './CountryCard';

const CountriesContainer = styled.section`
    background-color: #12343b;
    display: flex;
    flex-flow: row wrap;
    width: 95%;
    margin: 1% auto;
    border: 5px solid white;
`

const Loading = styled.div`
    height: vh;
    width: 90%;
    margin: 2.5% auto;
    background-color: #12343b;
    color: white;
    font-size: 2rem;
`

const Body = (props) => {

    useEffect(() => {
        debugger
        props.fetchCountries();
    }, [])

    console.log('this is in the body', props);

    return (
        <CountriesContainer>
        {props.isLoading ? <Loading>Loading countries now...</Loading> : null}
        {props.error ? (
        <p style={{ color: "red" }}>
          Error: {props.error}
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
        isLoading: state.isLoading,
        error: ''
    };
  };

export default connect(mapStateToProps, { fetchCountries })(Body);