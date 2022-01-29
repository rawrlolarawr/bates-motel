import Products from './Product/List';
import { data } from './data/seed'

function App() {
  return (
    <>
      <Products src={data.products} />
    </>
  );
}

export default App;
