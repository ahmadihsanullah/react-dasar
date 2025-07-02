import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
const products = [
    {
        id: 2,
        name: "Kucing Oren 1 ",
        description: "kucing oren nih bosss 1",
        harga: 100000,
        img: "./images/cat.jpg",
        qty: 0
    },
    {
        id: 3,
        name: "Kucing Oren 2",
        description: "kucing oren nih bosss 2",
        harga: 100000,
        img: "./images/cat.jpg",
        qty: 0
    },
    {
        id: 4,
        name: "Kucing Oren 2",
        description: "kucing oren nih bosss 2",
        harga: 100000,
        img: "./images/cat.jpg",
        qty: 0
    }
]

const ProductsPage = () => {
    const email = localStorage.getItem("email");
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, [])

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                if (!product) return acc; // abaikan jika produk tidak ditemukan
                return acc + product.harga * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }

    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("cart");
        window.location.href = "/login";
    }

    const handleAddToCart = (id) => {
        const product = products.find(product => product.id === id);
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            );
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    }

    // useref
    return (
        <Fragment>
            <div className="height-20 bg-blue-600 flex justify-end pr-5 text-white">
                {email}
                <Button onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex jutify-wrap py-5">
                <div className="w-4/6 justify-center">
                    <div className="flex justify-center py-5">
                        {products.map(product => {
                            return (
                                <CardProduct key={product.id}>
                                    <CardProduct.HeaderCard sourceImage={product.img} />
                                    <CardProduct.BodyCard title={product.name} description={product.description} />
                                    <CardProduct.FooterCard price={product.harga} handleToAddCart={() => handleAddToCart(product.id)} />
                                </CardProduct>
                            )
                        })}
                    </div>
                </div>
                <div className="w-2/6 ">
                    <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" border={1} >
                        <thead >
                            <tr>
                                <th>Produk</th>
                                <th>Harga</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.harga * item.qty}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={3}>Price</td>
                                <td>{totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage