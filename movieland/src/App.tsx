import React from 'react'
import logo from './logo.svg'
import './App.scss'
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
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { ContentPage } from './pages/ContentPage/ContentPage';

function App() {
  return (
    <div>
      {/* <ButtonPrimary name={'Primary button'} />
      <ButtonSecondary name={'Secondary button'} /> */}
      {/* <SearchControl/> */}

      {/* <Header /> */}
      {/* <SignInForm />
      <SignUpForm /> */}

      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}
      {/* <ResetPage /> */}
      {/* <NewPasswordPage /> */}
      {/* <Burger /> */}

      {/* <Footer /> */}

      <Routes>
        <Route path='/' element={<Layout />}>
          {/* стартовый путь */}
          <Route index element={<MainPage />} />
          {/* <Route path='mainpage2' element={<MainPage2 />} /> */}
          <Route path='signin' element={<SignInPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='settings' element={<SettingsPage />} />
          <Route path='content:id' element={<ContentPage />} />
          <Route path='search' element={<SearchPage />} />
          {/* <Route path='register' element={<RegistrationPage />} />
        <Route path='search' element={<SearchPage />} /> */}
          {/* <Route path='newpassword' element={<NewPassword />} /> */}
          {/* <Route path='addpost' element={
          <RequireAuth>
            <AddPostPage />
          </RequireAuth>
        } /> */}
          <Route path='reset' element={<ResetPage />} />
          {/* <Route path='succes' element={<SuccessPage />} />
        <Route path='content:id' element={<ContentPage />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='activate' element={<AtivationPage />} /> */}
        </Route>

        {/* <Route path='*' element={<Error404Page />} /> */}

      </Routes>

    </div>
  )
}

export default App;
