
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { useState } from 'react'
import { Card } from './Card'
import { Button } from 'react-bootstrap';
import './style.scss'

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState();
  const [corHexadecimal, setCorHexadecimal] = useState();

  function adicionarCor(event) {
    event.preventDefault()
    const coloracao = {
      nomeCor: nomeCor,
      hexadecimal: corHexadecimal
    }
	
	setAllCores([...allCores])

    //console.log(coloracao)
  }

  return (
    <div className="App">
     <h1>SISTEMA DE CORES</h1>
     <form className="formCadastro"  onSubmit={event => adicionarCor(event)}>
		<h2>CADASTRO DE COR</h2>

		<input type="text" className="form-control" value={nomeCor} onChange={event => setNomeCor(event.target.value)} placeholder="Entre com o nome da Cor"/>

		<input type="color" className="form-control" value={corHexadecimal} onChange={event => setCorHexadecimal(event.target.value)} placeholder="Escolha a cor"/>

		<button type="submit" className="btn btn-primary">Adicionar</button>
	</form>

	<section className="CardColor">
		{
			allColors.map (
				color => {

				}
			)
		}
	</section>
     {/* <Card /> */}
    </div>

  )
}

export default App