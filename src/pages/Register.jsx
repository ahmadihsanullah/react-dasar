import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
    return (
            <AuthLayout title="Register">
                <FormRegister />
                <p className="text-sm mt-2 text-center">Already have an account? <Link to="/login" className="text-sm font-bold text-blue-600">Login</Link></p>
            </AuthLayout>
    )
}

export default RegisterPage