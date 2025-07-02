import { useEffect, useRef } from "react";
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location.href = "/products";
    }

    const emailRef = useRef(null);
    
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
         <form onSubmit={handleLogin}>
         <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" ref={emailRef}/>
         <InputForm label="Password" type="password" placeholder="****" name="password"/>
         <Button type="submit">Login</Button>
        </form>
    )
}

export default FormLogin