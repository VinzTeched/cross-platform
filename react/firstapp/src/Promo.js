function Promo(props) {
    const styles = {
        color: "green",
        fontSize: "40px"
    }
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>{props.heading}</h1>
            </div>
            <div>
                <h2 style={styles}>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Promo;