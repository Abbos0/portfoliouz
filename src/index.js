import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Providers } from './redux/provider';


// import App from './App';

const App = lazy(()=>import('./App'))
////////bu joy ya'ni lazy loading uchun bo'lyapti
/* const App = lazy(()=>import('./App'))
<Suspense fallback={<h1>loading....</h1>}>
  <App />
</Suspense> */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>loading...</h1>}>
      <Providers>
            <App />
      </Providers>
</Suspense>
  </React.StrictMode>
);

