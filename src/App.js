import './App.scss';
import ContainerMaxWidth from './components/ContainerMaxWidth/ContainerMaxWidth';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';


function App() {
  return (
    <div>
      <Header />
      <Menu />
      <ContainerMaxWidth />
      <ProductList />
    </div>
  );
}

export default App;
