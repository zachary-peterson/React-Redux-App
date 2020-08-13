import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

const SpaceBreak = styled.div`
    margin: 0 0;
`

const AroundTheWorld = styled.header`
    width: 100%;
    margin: 2.5% auto;
    text-align: center;
    color: white;
    margin-top: 0;

    div  {
        font-size: 2.5rem;
        margin: 2% auto;
        padding-top: 1%;
        padding-bottom: 1%;
        background-color: #12343b;
        margin: 1% 2%;
        border: 5px solid white;

        div {
            background-image: url('https://images.unsplash.com/photo-1503220954697-e02095e8e0d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
            background-repeat:no-repeat;
            background-size: cover;
            border: 5px solid white;


            div {
                background-color: #755634;
                margin: 3% 3%;
                border: 5px solid black;
                background-image: none;
                
                h1,h2 {
                    font-family: 'Delius Unicase', cursive;
                    margin: 0 1%;
                    padding: 2% 0;
                    text-shadow: 2px 3px #271e0c;
                    line-height: .5;
                }

                h1 {
                    font-size: 4.5rem;
                    margin-bottom: 0;
                }

                h2 {
                    margin-top: 0;
                    font-size: 2rem;
                    margin-bottom: 1%;
                }

                h3{
                    margin: 0 1%;
                    padding: 2% 2%;
                    background-color: #2c381a;
                    font-family: 'Patrick Hand', cursive;
                    border: 5px solid black;
                    text-shadow: 2px 2px #271e0c;
                }
            }
            
            
        }

        
    }
`

const Header = (props) => {
    return (
        <SpaceBreak>
            <br /><br />
            <AroundTheWorld>
                <div>
                    <div>
                        <div id='clean'>
                            <h1>Countries &#38; Territories</h1>
                            <h2>Around The World:</h2>
                            <h3>More functionality coming soon...</h3>
                        </div>
                    </div>
                </div>
            </AroundTheWorld>
        </SpaceBreak>
    )
}



export default connect(null, {  })(Header);