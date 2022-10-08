import React from 'react'
import './Marcas.scss';
import cart from './assets/car.svg';
import deliv from './assets/deliv.svg';
import house from './assets/house.svg';
import tag from './assets/tag.svg';
import world from './assets/world.svg';
import melisa from './assets/cHLLxR4.png.png';
import forever from './assets/JOTNQgl.png.png';
import zara from './assets/PN0nOAY.png.png';
import comma from './assets/Qoc0YF7.png.png';
import ann from './assets/qZ1WvYA.png.png';

export default function Marcas() {
  return (
    <>
        <div>
            <h5>Por que comprar na Maeztra?</h5>
            <div className='why-buy-content wl-container'>
                <div className='box-why'>
                    <img src={world} />
                    <div>
                        <span>Produtos importados</span>
                        <p>Produto de Alta Qualidade</p>
                    </div>
                </div>
                <div className='box-why'>
                    <img src={house} />
                    <div>
                        <span>Estoque no Brazil</span>
                        <p>Produtos mais perto de você!</p>
                    </div>
                </div>
                <div className='box-why'>
                    <img src={deliv} />
                    <div>
                        <span>Trocas Garantidas</span>
                        <p>Trocas em até 48 horas, vejas as regras</p>
                    </div>
                </div>
                <div className='box-why'>
                    <img src={tag} />
                    <div>
                        <span>Ganhe 5% off</span>
                        <p>Pagando à vista no Cartão</p>
                    </div>
                </div>
                <div className='box-why'>
                    <img src={cart} />
                    <div>
                        <span>Frete Grátis</span>
                        <p>Em compras acima de R$ 499,00</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h3>Marcas Parceiras</h3>
            <div className='marcas content wl-container'>
                <img src={comma} alt="comma"/>
                <img src={melisa} alt="melisa"/>
                <img src={forever} alt="forever"/>
                <img src={zara} alt="zara"/>
                <img src={ann} alt="ann"/>
            </div>
        </div>
    </>
  )
}
