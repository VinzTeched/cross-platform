function OrderListTwo() {
    const order = {
        id: 1,
        username: "johndoe",
        item: "Pizza Magaharita",
        price: "$30.00"
    };
    return <Order {...order} />;
}

const Order = (props) => {
    return (
        <>
            <h5>{props.id}</h5>
            <h5>{props.username}</h5>
            <h5>{props.item}</h5>
            <h5>{props.price}</h5>
        </>
    )
}

export default OrderListTwo;