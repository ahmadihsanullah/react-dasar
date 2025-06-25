import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { title, children, type } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <div className="text-3-xl font-bold mb-2 text-blue-600 ">{title}</div>
                <p className="font-medium text-sm text-slate-500 mb-8">Please enter your credentials to continue</p>
                {children}
                <p className="text-sm mt-2 text-center">
                    {type === "register" ? "Already have an account? " : "Don't have an account? "}
                    {type === "register" ?
                        <Link to="/login" className="text-sm font-bold text-blue-600">Login</Link>
                        :
                        <Link to="/register" className="text-sm font-bold text-blue-600">Register</Link>
                    }
                </p>
            </div>
        </div >
    )
}

export default AuthLayout;