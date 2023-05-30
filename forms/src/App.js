import CopyrightIcon from '@mui/icons-material/Copyright';
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import './App.css';
import FormApp from './components/formapp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="head-left">
          <div className="head-logo">
            <img src={ process.env.PUBLIC_URL + 'static/images/AVCCodeCamp_Logo.png'}
                  alt="Render Logo" width="200px" />
          </div>
          <div className="App-title">
            
          </div>
        </div>
        <div className="head-right">
          React Project - 9<br />
          React Form and Form Elements Processing
        </div>
      </header>
      
      <main className="container">
        <FormApp />        
      </main>
      <div className="App-footer">
        <div className="footer-info">
          <CopyrightSharpIcon fontSize='small' style={{marginRight: 6}} />  Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
