import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.HeaderCard sourceImage="./images/cat.jpg" />
                <CardProduct.BodyCard title={"Kucing Oren"} description={"kucing oren nih bosss"} />
                <CardProduct.FooterCard price={"100.000"} />
            </CardProduct>
             <CardProduct>
                <CardProduct.HeaderCard sourceImage="./images/cat.jpg" />
                <CardProduct.BodyCard title={"Kucing Oren"} description={"kucing oren nih bosss"} />
                <CardProduct.FooterCard price={"100.000"} />
            </CardProduct>
        </div>
    )
}

export default ProductsPage