import React from "react";

function ListClients(props) {

  const data = props.clients;

  console.log(data);

  return (
    <React.Fragment>
        {data?.map((item) => {
            return(
            <tr>
            <th scope="row">{item.IdCliente}</th>
            <td>{item.Nombres}</td>
            <td>{item.Apellidos}</td>
            <td>{item.Edad}</td>
            <td>{item.FechaNacimiento}</td>
          </tr>
            )
        })}
          
    </React.Fragment>
  );
}

export default ListClients;
