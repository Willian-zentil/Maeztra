import React from 'react'
import './Newsletter.scss'

export default function Newsletter() {
  return (
    <div className='newsletter'>
        <h3>Recebe Nossa Newsletter</h3>
        <div className='input-news'>
            <input placeholder='Digite seu e-mail' />
            <label>Enviar</label>
        </div>
    </div>
  )
}
