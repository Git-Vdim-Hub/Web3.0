import {Footer, CurrencyConverter } from './components';
import background from '../images/beartoken.png';


const App = () => {
  return (
      <div className="min-h-screen">
          <div style={{ backgroundImage: `url(${background})` }}>
              <CurrencyConverter/>
              <Footer />
          </div>
        </div>
  );

}

export default App;