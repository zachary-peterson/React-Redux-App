import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

const AroundTheWorld = styled.header`
    width: 90%;
    margin: 2% auto;
    text-align: center;
`

const Header = (props) => {
    return (
        <AroundTheWorld>
            <h1>Countries Around The World:</h1>
        </AroundTheWorld>
    )
}



export default connect(null, {  })(Header);