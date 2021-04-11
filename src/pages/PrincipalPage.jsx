import React, { useState, useEffect } from "react";
import ListClient from "../components/ListClients";
import Loader from "../components/Loader";
import Error from "../pages/Error";
import Api from "../api";
import "./styles/PrincipalPage.scss";

function PrincipalPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [clients, setClients] = useState([]);
  const [kpi, setKpi] = useState({
    average: null,
    standardDeviation: null,
  });

  useEffect(() => {
    
  }, []);

  const handleClick = (e) => {
    fetchClients();
  };

  const handleClickKpi = (e) => {
    fetchKpi();
  };

  const formatDecimal = (x) => {
    if(x === null)
      return ''
    else
      return Number.parseFloat(x).toFixed(2);
  }

  const fetchClients = async () => {
    setLoading(true);
    setError(false);
    setErrorMessage(null);
    try {
      const response = await Api.clients.list();
      setLoading(false);
      setClients(response.results);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  const fetchKpi = async () => {
    setLoading(true);
    setError(false);
    setErrorMessage(null);
    try {
      const response = await Api.clients.getKpi();
      setLoading(false);
      setKpi(response.kpi);
     } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  if(loading){
    return(
      <Loader></Loader>
    );
  }

  if(error){
    return <Error  error={errorMessage}></Error>
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="form-group col-3">
          <div className="row">
            <div className="col-5">
              <button onClick={handleClick} className="btn btn-info">
                Listar Clientes
              </button>
            </div>
            <div className="col-5">
              <button onClick={handleClickKpi} className="btn btn-info">
                Obtener KPI
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
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
              <ListClient clients={clients}></ListClient>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <h1>Promedio: {formatDecimal(kpi.average)}</h1>
          <h1>Desviación standar: {formatDecimal(kpi.standardDeviation)}</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PrincipalPage;
