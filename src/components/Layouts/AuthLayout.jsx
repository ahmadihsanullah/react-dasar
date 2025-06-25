const AuthLayout = (props) => {
    const { title, children } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <div className="text-3-xl font-bold mb-2 text-blue-600 ">{title}</div>
                <p className="font-medium text-sm text-slate-500 mb-8">Please enter your credentials to continue</p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;