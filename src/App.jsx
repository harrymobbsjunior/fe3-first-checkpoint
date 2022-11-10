
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { useState } from 'react'
import { Card } from './Card'
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss'

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState();
  const [corHexadecimal, setCorHexadecimal] = useState();
  const [formularioErro, setFormularioErro] = useState(false)
  const [allCores, setAllCores] = useState([]);

  function adicionarCor(event) {
    event.preventDefault()

    const coloracao = {
      nomeCor: nomeCor,
      corHexadecimal: corHexadecimal
    }

    if (nomeCor === '' || corHexadecimal === '') {

      console.log('Favor preencher os campos ');      
      setFormularioErro(true)

  } else {

      setFormularioErro(false)

      setAllCores([...allCores, coloracao])

      setNomeCor('')
      setCorHexadecimal('')

  }

    
  }

  return (
    <div className="App">
      <h1>CADASTRO DE CORES</h1>
      <form className="formCadastro" onSubmit={event => adicionarCor(event)}>
        <h2>ADICIONAR NOVA COR</h2>

        <Form.Group className="groupForm">
          <Form.Label>Nome da Cor: </Form.Label>
          <Form.Control type="text" value={nomeCor} onChange={event => setNomeCor(event.target.value)} placeholder="nome da Cor" />
        </Form.Group>

        <Form.Group className="groupForm">
          <Form.Label>Cor Hexadecimal: </Form.Label>
          <Form.Control type="color" value={corHexadecimal} onChange={event => setCorHexadecimal(event.target.value)} placeholder="Cor Hexadecimal" />

        </Form.Group>

        <Button type="submit" variant="primary" >Adicionar</Button>

        <div className={formularioErro ? 'no-hidden' : 'hidden'}>
          <p>Por favor, verifique os dados inseridos no formulário.</p>
        </div>
      </form>

      <section className="cards">
        {
          allCores.map((cor, i) => {
            return (
              <Card key={i} corData={cor} />
            )
          })
        }
      </section>
    </div>
  )
}

export default App