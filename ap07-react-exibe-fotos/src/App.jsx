// rcc
import React, { Component } from 'react'
import Busca from './components/Busca'
import {createClient} from 'pexels'
import PexelsLogo from './components/PexelsLogo'
import Imagem from './components/Imagem'

export default class App extends Component {

  state = {
    photos: []
  }

  pexelsClient = null

  onBuscarRealizada = (termo) => {
  
    this.pexelsClient.photos.search({ 
      query: termo
    })
    
    .then(result => this.setState({photos: result.photos}));
  }

  componentDidMount () {
    this.pexelsClient = createClient ('dRf6aY1mBhFzgxhu82nb3cIcXopNcoYB3U5kIt9ZLyMKfKfeW0HzQPCA')
  }

  render() {
    return (

      <div className='grid w-9 m-auto border-1 border-400'>

        <div className = 'col-12'>
          
          <PexelsLogo />

        </div>

        <div className="col-12">
          <h1>Exibir Lista...</h1>
        </div>

        <div className="col-12">
          <Busca 
            dica="Procurar..."
            onBuscarRealizada={this.onBuscarRealizada}/>
        </div>
        <div className="col-12">
          {
            this.state.photos.map((photo) => (
              <div key={photo.id}>
                <Imagem src={photo.src.small} alt={`Foto tirada por ${photo.photographer}. ${photo.alt}`} />

              </div>
            ))
          }
        </div>
        
      </div>
      
    )
  }
}
