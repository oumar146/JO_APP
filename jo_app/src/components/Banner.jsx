import '../styles/banner.css'





const Banner = (props) => {

    return (
        <div className="bg-banner">
            <h1>
                {props.text}
            </h1>
            {props.children}
        </div>
    )
}

export default Banner;