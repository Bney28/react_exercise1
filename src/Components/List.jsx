import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Container from '../Container/Container'

export default class List extends Component {

  constructor() {
    super()
    this.state = {
      pelicula: []
    }
  }

  async componentDidMount() {
    const url = "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json"
    const resp = await fetch(url)
    const data = await resp.json()
    const { results } = data
    this.setState({ pelicula: results })
  }

  render() {
    return (
      <>
        <Container>
        <h1>Lista de Películas</h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {
            this.state.pelicula.map((pelicula, i) => {
              <Card
                key={i}
                movies={pelicula}
                />
            })
          }

        </div>

        </Container>
      </>
    )
  }

}
