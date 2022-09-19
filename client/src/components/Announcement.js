import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
    background-color: #b65fbf;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

function Announcement() {
  return (
    <Container>
        Hot Deals! All Year Long
    </Container>
  )
}

export default Announcement