import React, {useState, useEffect} from 'react'
import './Footer.scss'
import maeztra from './assets/maeztra.svg'
import vtex from './assets/logo-footer.svg'
import vtexMob from './assets/logo-footer-mob.svg'
import maeztraMob from './assets/Maeztra-mob.svg'
import visa from './assets/Vector-1.svg'
import master from './assets/Vector-2.svg'
import insta from './assets/insta.svg'
import linkedin from './assets/linkedin.svg'
import ytb from './assets/ytb.svg'
import facebook from './assets/facebook.com.svg'

export default function Footer() {


    function collapseToggle(e) {
        if(e.target.parentElement.children[1].classList[1] === 'active'){
            e.target.parentElement.children[1].classList.remove("active");
        }else {
            e.target.parentElement.children[1].classList.add("active");
        }
    }
    


    return (
        <>
            <div className='Footer wl-container'>
                <div>
                    <h3 onClick={(e)=>{collapseToggle(e)}}>Informações</h3>
                    <div className='container-cat'>
                        <a href="">Quem Somos</a>
                        <a href="">Prazo de Envio</a>
                        <a href="">Trocas e Devoluções</a>
                        <a href="">Promoções e Cupons</a>
                    </div>
                </div>
                <div>
                    <h3 onClick={(e)=>{collapseToggle(e)}}>Minha Conta</h3>
                    <div className='container-cat'>
                        <a href="">Minha Conta</a>
                        <a href="">Meus Pedidos</a>
                        <a href="">Cadastre-se</a>
                    </div>
                </div>
                <div>
                    <h3 onClick={(e)=>{collapseToggle(e)}}>Onde nos Encontrar</h3>
                    <div className='container-cat'>
                        <a href="">Lojas</a>
                        <a href="">Endereço</a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='box-footer'>
                    <a href=""><img src={facebook} /></a>
                    <a href=""><img src={linkedin} /></a>
                    <a href=""><img src={insta} /></a>
                    <a href=""><img src={ytb} /></a>
                </div>
                <div className='box-footer'> 
                   <img src={visa} />
                   <img src={master} />
                   <img src={visa} />
                   <img src={master} />
                </div>
                <div className='box-footer'>
                    <div>
                        <p>Powered by</p>
                        <a href=""><img src={vtex} className='desk'/></a>
                        <a href=""><img src={vtexMob} className='mob'/></a>
                    </div>
                    <div>
                        <p>Developed by</p>
                        <a href=""><img src={maeztra} className='desk'/></a>
                        <a href=""><img src={maeztraMob} className='mob'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}
