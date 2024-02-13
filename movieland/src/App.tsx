import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ButtonPrimary } from './component/Buttons/ButtonPrimary/ButtonPrimary';
import { ButtonSecondary } from './component/Buttons/ButtonSecondary/ButtonSecondary';
// import { SearchResults } from './component/Search/results/SearchResults';
import { SearchControl } from './component/Search/control/SearchControl';
import { SignInForm } from './component/Forms/SignInForm/SignInForm';
import { SignUpForm } from './component/Forms/SignUpForm/SignUpForm';
import { Footer } from './component/Footer/Footer';
import { Header } from './component/Header/Header';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { ResetPage } from './pages/ResetPage/ResetPage';
import { NewPasswordPage } from './pages/NewPasswordPage/NewPasswordPage';

function App() {
  return (
    <div>
      {/* <ButtonPrimary name={'Primary button'} />
      <ButtonSecondary name={'Secondary button'} /> */}
      {/* <SearchControl/> */}

      <Header />
      {/* <SignInForm />
      <SignUpForm /> */}

      {/* <SignInPage/> */}
      {/* <SignUpPage /> */}
      {/* <ResetPage /> */}
      <NewPasswordPage />

      <Footer />
    </div>
  )
}

export default App;
