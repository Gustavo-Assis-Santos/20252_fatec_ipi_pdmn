// rcc
import React, { Component } from 'react'
import Busca from './components/Busca'
// import { createClient } from 'pexels'
import ListaImagens from './components/ListaImagens'
import PexelsLogo from './components/PexelsLogo'
import pexelsClient from './utils/pexelsClient'
export default class App extends Component {

  state = {
    photos: []
  }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo
      }
    })
    .then(result => {
      this.setState({photos: result.data.photos})  
    })  
  }

  // pexelsClient = null
  // onBuscaRealizada = (termo) => {
  //   //fazer a busca usando o pexelsClient e exibir o resultado inteiro no log do navegador
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   })
  //   .then(result => this.setState({photos: result.photos}))

  // }

  componentDidMount(){
    // this.pexelsClient = createClient('')
  }
  render() {
    return (
      <div className='grid w-9 m-auto border-1 border-400'>
        <div className='col-12'>
          {/* faça isso funcionar, fazendo com que o logo claro da pexels apareça */}
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className='col-12'>
          <Busca 
            dica="Procurar..."
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
            <div className="grid">
              <ListaImagens photos={this.state.photos}/> 
            </div>
        </div>
      </div>
    )
  }
}
