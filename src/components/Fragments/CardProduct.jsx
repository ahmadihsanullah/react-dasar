import Button from "../Elements/Button";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs m-2 p-4 bg-gray-800 rounded items-center ">
            {children}
        </div>
    )
}

const HeaderCard = (props) => {
    const { sourceImage } = props
    return (
        <div className="flex justify-center items-center mt-2">
            <img src={sourceImage} alt="" />
        </div>
    )
}

const BodyCard = (props) => {
    const { title, description } = props
    return (
        <div className="mt-2 text-center rounded">
            <a href="" >
                <h5 className="bg-white">{title}</h5>
                <p className="mt-2 bg-gray-300 opacity-50" >{description}</p>
            </a>
        </div>
    )
}

const FooterCard = (props) => {
    const { price } = props
    return (
        <div className="flex justify-between mt-2">
            <div className="text-white text-xl">Rp. {price}</div>
            <div className="">
                <Button>Beli</Button>
            </div>
        </div>
    )

}

CardProduct.HeaderCard = HeaderCard
CardProduct.BodyCard = BodyCard
CardProduct.FooterCard = FooterCard

export default CardProduct