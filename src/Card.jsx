//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {

  return (
    <div className="card-container" style={{backgroundColor: props.corData.corHexadecimal}} >
            <div className="card-body">
                <h3>Cor: {props.corData.nomeCor}</h3>
                <span>Hexadecimal: {props.corData.corHexadecimal}</span>
            </div>
      </div>
  )

  // return (
  //   <div>
  //       <div className="boxCard">
  //         <h3>Color</h3>
  //         <p>Código</p>
  //       </div>

  //       <div className="boxCardItem">
  //           <div className="card-body">
  //               <h1>{props.productData.name}</h1>
  //               <span>R$ {props.productData.price},00</span>
  //           </div>
  //       </div>
  //   </div>
  // )
}