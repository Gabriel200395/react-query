import { useUsers } from "./store"

function App() {

  const { state: {
    repo
  }
  } = useUsers();

  console.log(repo)

  return (
    <h2>Inciando Estudos com React Query</h2>
  )
}

export default App
