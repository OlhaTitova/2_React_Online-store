import './App.scss';
import ContainerMaxWidth from './components/ContainerMaxWidth/ContainerMaxWidth';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import ContainerRoot from './components/ContainerRoot/ContainerRoot';


function App() {
  return (
    <div>
      <Header />
      <Menu />
      <ContainerMaxWidth />
      <ContainerRoot />
    </div>
  );
}

export default App;
