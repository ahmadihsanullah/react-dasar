import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-5">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;