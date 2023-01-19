import React, {Component} from 'react'
import styled from 'styled-components'
import List from '../Components/List'

const StyleContainer = styled.div`background-color: beige;`

export default class Container extends Component{
    render(){
        return(

        <StyleContainer>
            <List />
        </StyleContainer>

        )
    }
}