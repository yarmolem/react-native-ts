// import Login from './sections/Login'
// import Contador from './sections/Contador'
// import Funciones from './sections/Funciones'
// import TiposBasicos from './sections/TiposBasicos'
// import ObjetosLiterales from './sections/ObjetosLiterales'
// import Usuarios from './sections/Usuarios'

import Forms from './sections/Forms'

// import AuthState from './context/AuthState'

function App() {
  return (
    <>
      <div className="h-screen w-full bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 pt-10 w-full h-full text-white">
          <h1 className="text-6xl pb-2">Introduccion a React + TS</h1>
          <hr className="pb-2" />
          {/* <Funciones /> */}
          {/* <TiposBasicos /> */}
          {/* <ObjetosLiterales /> */}
          {/* <Contador /> */}
          {/* <Login /> */}
          {/* <Usuarios /> */}

          <Forms />
        </div>
      </div>
    </>
  )
}

export default App
