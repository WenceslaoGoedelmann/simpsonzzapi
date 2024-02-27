import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import Checkout from '../pages/Checkout/Checkout';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import MisOrdenes from '../pages/MisOrdenes/MisOrdenes';
import Resumen from '../pages/Resumen/Resumen';
import Verify from '../pages/Verify/Verify';



function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/checkout' element={ /* ver explicacion en ProtectedRoute  */
        <ProtectedRoute redirectTo='/login'> 
          <Checkout />
        </ProtectedRoute>
      } />
      <Route path='/mis-ordenes' element={<MisOrdenes />} />
      <Route path='/register' element={<Register />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/login' element={<Login />} />
      <Route path='/felicitaciones' element={<Felicitaciones />} />
      <Route path='/resumen/:orderId' element={<Resumen />} />

      <Route path='*' element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
