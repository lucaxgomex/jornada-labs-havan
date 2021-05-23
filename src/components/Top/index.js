import React from 'react';
import './index.css';
import Menu from '../../images/icons/Menu.svg';
import Perfil from '../../images/image.jpeg';

class Top extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <img src={ Menu } alt="Menu"/>
        <h1>Sistema de Gerenciamento de Operações</h1>
        <img src={ Perfil } alt="Foto de Perfil"/>
      </nav>
    );
  }
}

export default Top;
