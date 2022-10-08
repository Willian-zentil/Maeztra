/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import logo from './imgs/logo-maeztra-novo.png';
import './Header.scss';

export default function Header() {
  return (
    <section className='header'>
        <div className='topbar'>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</div>
        <div className='wl-container'>
            <div className='menu-hamb'>
                <span></span>
            </div>
            <a href="/"><img src={logo} className="logo" alt="logo" /></a>
            <div className='search'>
                <input placeholder='O que você Busca?'/>
                <label>Buscar</label>
            </div>
            <div className='icons-header'>  
                <a className='account' href="/"><span>Minha Conta</span></a>
                <a className='wishlist' href="/"><span>Meus Favoritos</span></a>
                <a className='search-icon' href="/"></a>
                <a className='cart' href="/"><span>Meu Carrinho</span></a>
            </div>
        </div>
        <div className='menu-desk'>
            <div className='wl-container'>
                <div className='first item'>
                    <a href="">Novidades</a>
                    <div className='item-sub'>
                        <span>Blusas</span>
                        <span>Calças</span>
                        <span>Jeans</span>
                    </div>
                </div>
                <div className='item'>
                    <a href="">Vestidos</a>
                </div>
                <div className='item'>
                    <a href="">Roupas</a>
                </div>
                <div className='item'>
                    <a href="">Sapatos</a>
                </div>
                <div className='item'>
                    <a href="">Lingerie</a>
                </div>
                <div className='item'>
                    <a href="">Acessórios</a>
                </div>
                <div className='item'>
                    <a href="">OUTLET</a>
                </div>
            </div>
        </div>
    </section>
  )
}
