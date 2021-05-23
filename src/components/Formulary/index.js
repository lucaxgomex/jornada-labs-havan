import React from 'react';
import './style.css';

class Formulary extends React.Component {
  render() {
    return (
      <form>
        <label>Nome do cliente: </label>
        <input type="text" class="input"/>
        <br/>
        <label>Moeda de Origem: </label>
        <input type="text" class="input"/>
        <br/>
        <label>Moeda de Destino: </label>
        <input type="text" class="input"/>
        <br/>
        <label>Data da Operação: </label>
        <input type="date" class="input"/>
        <br/>
        <label>Valor Original: </label>
        <input type="number" class="input"/>
        <br/>
        <label>Valor Convertido: </label>
        <input type="number" class="input"/>
        <br/>
        <label>Taxa Cobrada: </label>
        <input type="number" class="input"/>
        <br/>
        <input type="submit" value="Enviar"/>
      </form>
    );
  }
}

export default Formulary;
