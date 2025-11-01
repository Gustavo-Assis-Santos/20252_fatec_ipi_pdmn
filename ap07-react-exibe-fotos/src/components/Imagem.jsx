import React from 'react'

const Imagem = ({src, alt}) => {
  return (
    <div className='col-12 md:col-6 lg:col-4 xl:col-3'>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem