import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./root/RootLayout";
import SignIn from "./auth/pages/SignIn";
import MyBanks from "./root/page/MyBanks";
import PaymentTransfer from "./root/page/PaymentTransfer";
import SignUp from "./auth/pages/SignUp";
import Savings from "./alt/pages/personal-banking/Savings";
import Checking from "./alt/pages/personal-banking/Checking";
import Pension from "./alt/pages/personal-banking/Pension";
import Cards from "./alt/pages/personal-banking/Cards";
import AltLayout from "./alt/AltLayout";
import DashBoard from "./components/DashBoard";
import HomePage from "./root/page/HomePage";
import AuthLayout from "./auth/AuthLayout";
import TransactionHistory from "./root/page/TransactionHistory";
import BankDetailsPage from "./root/page/BankDetailsPage";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import VerifyEmail from "./components/verify/VerifyEmail";
import SubmiteFile from "./components/verify/SubmiteFile";
import AdminPage from "./components/table/Table";
import Notification from "./root/page/Notification";

const App = () => {
  return (
    <main className="w-full h-full overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          {/********** RootLayout************** */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="my-banks" element={<MyBanks />} />
            <Route path="payment-transfer" element={<PaymentTransfer />} />
            <Route
              path="transaction-history"
              element={<TransactionHistory />}
            />
            <Route path="notification" element={<Notification />} /> 

            <Route
              path="/bank-card_details/:id"
              element={<BankDetailsPage />}
            />
          </Route>

          {/********** AltLayout************** */}
          <Route element={<AltLayout />}>
            {/********** personal banking************** */}
            <Route path="home" element={<HomePage />} />
            <Route path="personal-banking/savings" element={<Savings />} />
            <Route path="personal-banking/checking" element={<Checking />} />
            <Route path="personal-banking/pension" element={<Pension />} />
            <Route path="personal-banking/card" element={<Cards />} />

            <Route path="business-banking/savings" element={<Savings />} />
            <Route path="business-banking/checking" element={<Checking />} />
            <Route path="business-banking/pension" element={<Pension />} />
            <Route path="business-banking/card" element={<Cards />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about" element={<About />} />

            {/********** business banking************** */}
          </Route>

          {/********** RootLayout************** */}
          <Route element={<AuthLayout />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            {/*<Route path="admin" element={<AdminTable />} />*/}
            <Route path="admin" element={<AdminPage />} />
            <Route path="verify-email" element={<VerifyEmail />} />
           <Route path="identity" element={<SubmiteFile />} /> 

          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
