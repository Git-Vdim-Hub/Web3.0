import {CurrencyConverter } from './components';
import background from '../images/beartoken.png';

const homeStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: 'center',
  opacity: '100%'
}

const App = () => {
  return (
      <div className="min-h-screen">
          <div style={homeStyle}>
              <CurrencyConverter/>
          </div>
        </div>
  );

}

export default App;