import React from 'react';

// import './app-header.css';

import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'navy' : 'black'};
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
        :hover {
            color: blue;
        }
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header as='a' colored >
            <h1>My Cool Name</h1>
            <h2>{allPosts} posts, liked {liked}</h2>
        </Header>
    )
}

export default AppHeader;