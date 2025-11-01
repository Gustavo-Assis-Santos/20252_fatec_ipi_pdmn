// rafce
import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({ photos }) => {
  return (
    photos.map((photo) => (
      // colocar um atributo chamado key nessa div
      // o valor associado deve ser o id da photo da vez
      <Imagem 
        key={photo.id}
        src={photo.src.small} 
        alt={`Foto tirada por ${photo.photographer}. ${photo.alt}`} />
    ))
  )
}

export default ListaImagens