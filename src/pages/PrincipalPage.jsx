import React, { useState, useEffect } from "react";
import ListClient from "../components/ListClients";
import Api from "../api";

function PrincipalPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetchData();
  }, []);

  const handleClick = (e) => {
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    setErrorMessage(null);
    try {
      const response = await Api.clients.list();
      console.log({response:response});
      setLoading(false);
      setData(response.results);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Edad</th>
                <th scope="col">Fecha de Nacimiento</th>
              </tr>
            </thead>
            <tbody>
              <ListClient clients={data}></ListClient>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button onClick={handleClick} className="btn btn-success">
            Listar Clientes
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PrincipalPage;
