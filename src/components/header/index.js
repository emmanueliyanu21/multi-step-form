
function Header(props) {
    return (
        <div className="header">
            <h2>{props?.data?.title}</h2>
            <p>{props?.data?.description}</p>
        </div>
    )
}

export default Header