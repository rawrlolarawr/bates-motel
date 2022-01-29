import Products from './Product/List';
import NewProduct from './Product/Form'

import { data } from './data/seed'

function App() {
  return (
    <>
      <NewProduct />
      <Products src={data.products} />
    </>
  );
}

export default App;
