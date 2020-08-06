import React from 'react';
import Layout from './components/Layout/Layout';
import TicketCashier from './containers/TicketCashier/TicketCashier';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div class = "App">
    <BrowserRouter>
    <div >
     <Layout >
       <TicketCashier/>
     </Layout>
    </div>
    </BrowserRouter></div>
  );
}

export default App;