import { useState } from "react";
import Hashtaurante from "./assets/restaurante.jpg";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import {pratosPrincipais, sobremesas, bebidas} from "./cardapio";

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  // atualizar estado do componente
  const [paginaSelecionda, atualizarPaginaSelecionada] = useState(0);

  return <>
        <img src={Hashtaurante} alt="" className="capa"/>
        <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
        <div className="menu">
         {paginasMenu[paginaSelecionda].map(item => <ItemCardapio nome={item.nome}
          descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
        </div>
         </> 
}
