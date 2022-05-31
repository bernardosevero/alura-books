import styled from 'styled-components'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'

const AppWrapper = styled.body`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
      <AppWrapper>
        <HeaderMenu />
      </AppWrapper>
  )
}

export default App
