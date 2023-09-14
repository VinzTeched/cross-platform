import styles from './banner.module.css';



const Banner = ({headerText}) => {
    return (
        <header className="row mb-5 mt-3">
            <div className="col-lg-5">
                <img src="./vinshagy.png" className={styles.logo} />
            </div>
            <div className="col-lg-7 mt-lg-4" style={subtitleStyle}>
                {headerText}
            </div>
        </header>
    )
}

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
    marginTop: "10px"
}

export default Banner;