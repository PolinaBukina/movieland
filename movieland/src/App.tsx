import './App.scss'
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
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { TrendsPage } from './pages/TrendsPage/TrendsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='signin' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='reset' element={<ResetPage />} />
        <Route path='newpassword' element={<NewPasswordPage />} />
        <Route path='/' element={<Layout />}>
          {/* стартовый путь */}
          <Route index element={<MainPage />} />
          <Route path='settings' element={<SettingsPage />} />
          <Route path='content:id' element={<ContentPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='trends' element={<TrendsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
