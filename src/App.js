import './App.scss';
import ContainerMaxWidth from './components/ContainerMaxWidth/ContainerMaxWidth';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';


function App() {
  return (
    <div>
      <Header />
      <ContainerMaxWidth />
      <ProductList />
    </div>
  );
}

export default App;
