const Button = (props) => {
    const {children, type="button", onClick} = props;
    return (
        <div>
            <button onClick={onClick} type={type} class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full">{children}</button>
        </div>
    )
}

export default Button;