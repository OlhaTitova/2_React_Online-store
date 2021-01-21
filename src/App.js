import './App.scss';
import ContainerMaxWidth from './components/ContainerMaxWidth/ContainerMaxWidth';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import CardBox from './components/CardBox/CardBox';


function App() {
  return (
    <div>
      <Header />
      <Menu />
      <ContainerMaxWidth />
      <CardBox />
    </div>
  );
}

export default App;
