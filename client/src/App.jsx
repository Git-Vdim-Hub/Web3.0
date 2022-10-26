import {Footer, CurrencyConverter } from './components';
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
          <CurrencyConverter />
          <ToastContainer position="top-center" theme='dark' />
        </div>
      </div>
  );

}

export default App;