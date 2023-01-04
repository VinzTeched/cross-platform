
function OrderList() {
    return (
        <Order id="1" username="John Doe" item="Pizza Margharita" price="$30.00" />
    );
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

export default OrderList;

