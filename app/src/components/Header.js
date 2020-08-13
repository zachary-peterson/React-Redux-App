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

        div {
            background-color: #271e0c;

            div {
                background-color: #755634;
                margin: 1% 2%;
                border: 5px solid #ccad8c;
                
                h1 {
                    font-family: 'Delius Unicase', cursive;
                    margin: 0 1%;
                    padding: 2% 0;
                    text-shadow: 2px 3px #271e0c;
                }

                h3{
                    margin: 0 1%;
                    padding: 2% 2%;
                    background-color: #2c381a;
                    font-family: 'Patrick Hand', cursive;
                    border: 5px solid #ccad8c;
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
                        <div>
                            <h1>Countries Around The World:</h1>
                            <h3>More functionality coming soon...</h3>
                        </div>
                    </div>
                </div>
            </AroundTheWorld>
        </SpaceBreak>
    )
}



export default connect(null, {  })(Header);