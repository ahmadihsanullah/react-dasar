import './App.css'
import Button from './components/Elements/Button'
import InputForm from './components/Elements/Input'
import FormLogin from './components/Fragments/FormLogin'
import LoginPage from './pages/login'
import RegisterPage from './pages/Register'

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  )
}

export default App
