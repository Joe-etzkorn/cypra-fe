import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '@features/signup';
import SignIn from '@features/signin';
import TroubleSignIn from '@features/trouble-signin';
import SetPassword from '@features/set-password';
import UserInvited from '@features/user-invited';
import GetStarted from '@features/get-started-flow/get-started';
import AdminSetup from '@features/admin-flow-get-started';
import MainLayout from './layout';
import AdminSalesDashboard from '@features/admin/sales-dashboard';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path="signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/trouble-signin" element={<TroubleSignIn />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route path="/user-invited" element={<UserInvited />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/admin-setup" element={<AdminSetup />} />

            <Route path="admin">
              <Route path="sales-dashboard" element={<AdminSalesDashboard />} />
            </Route>
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
