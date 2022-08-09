import React from 'react';
import Button from '../../components/Button';

import './styles.css';

export default function NormalForm(){
    return (
        <div className='container'>
            <h1 className='title'>NORMAL FORM</h1>
            <form className='form'>
                <span className='input-label'>Nome:</span>
                <input  />
                <div>
                    <span className='input-label'>Idade</span>                
                    <input  />
                </div>

                <span className='input-label'>Nome da Mãe</span>
                <input  />
                <span className='input-label'>Nome da Mãe</span>
                <input  />
            </form>
            <div>
                <Button title='Confirmar'/>
                <Button title='Ver componentes dinamicos'/>
                <Button title='Ver basico'/>
            </div>
        </div>
    )
}