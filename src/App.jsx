import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL

    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch((e) => {
        console.error("La peticion fallo " + e)
      })
  }, [])

  if (!criptos)
    return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {criptos.map(({ id, name, priceUsd }) => (
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        ))}
      </ol>
    </>

  )
}
export default App
