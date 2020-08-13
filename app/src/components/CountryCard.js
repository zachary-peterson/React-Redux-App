import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

const CountryContainer = styled.article`
    width: 45%;
    margin: 2% auto;
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
        border: 3px solid white;

        &:hover {
            background-color: #755634;
            border: 3px solid black;

            ul {
                background-color: rgba( 47, 48, 48, 1);
                border: 2px solid black;
            }
        }

        h2 {
            font-family: 'Rowdies', cursive;
            font-size: 3.5rem;
            margin: 2% auto;
        }

        h3  {
            font-family: 'Baloo Chettan 2', cursive;
            font-size: 2rem;
            margin: 2% auto;
        }

        ul {
            text-align: right;
            margin: 0 5%;
            padding: 3%;
            background-color: rgba( 47, 48, 48, 0.8);
            border: 2px solid white;

            li {
                text-align: right;
                margin: 2% 2%;
                margin-left: 3%;
                font-family: 'Baloo Chettan 2', cursive;
                font-size: 1.25rem;
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