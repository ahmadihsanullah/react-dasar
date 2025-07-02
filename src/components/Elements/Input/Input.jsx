import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const {type, placeholder, name} = props;
    return (
        <input type={type}
                name={name}
                  placeholder={placeholder}
                  id={name}
                  ref={ref}
                  className="w-full p-2 mb-4 text-sm text-slate-500 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600" 
        />
    )
})

export default Input;