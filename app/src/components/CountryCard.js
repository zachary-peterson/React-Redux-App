import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

const CountryContainer = styled.article`
    width: 45%;
    margin: 1% auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    div {
        width: 92.5%;
        background-color: rgba( 84, 53, 42, 0.7);
        margin: 2% auto;
        padding: 1%;
        padding-bottom: 2.5%;
        text-align: center;
        color: white;
        text-shadow: 2px 2px #000000;
        font-size: 1.25rem;

        ul {
            text-align: right;
            margin: 0 5%;

            li {
                text-align: right;
            }
        }
    }
`


const CountryCard = (props) => {
    console.log(props);
    return (
            <CountryContainer key={props.name} className={props.region} id={props.capital} >
                <div>
                    <h2>{props.name}</h2>
                    {props.nativeName ? <h3>Native Name: <em>{props.nativeName}</em></h3> : null}
                    <h3>Key Facts:</h3>
                    <ul>
                        {props.capital ? <li>Capital: {props.capital}</li> : null}
                        <li>Region: {props.region}</li>
                        <li>Population: {props.population}</li>
                        {props.demonym ? <li>Demonym: {props.demonym}</li> :null}
                    </ul>
                </div>
            </CountryContainer>
    )
}

export default CountryCard; 