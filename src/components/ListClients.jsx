import React from "react";

function ListClients(props) {

  const data = props.clients;

  const formatDate = (x) =>{
    var date = new Date(x);
    return `${date.getUTCDay()}-${date.getUTCMonth()}-${date.getUTCFullYear()}`;
  }

  return (
    <React.Fragment>
        {data?.map((item) => {
            return(
            <tr key={item.IdCliente}>
            <th scope="row">{item.IdCliente}</th>
            <td>{item.Nombres}</td>
            <td>{item.Apellidos}</td>
            <td>{item.Edad}</td>
            <td>{formatDate(item.FechaNacimiento)}</td>
          </tr>
            )
        })}
          
    </React.Fragment>
  );
}

export default ListClients;
