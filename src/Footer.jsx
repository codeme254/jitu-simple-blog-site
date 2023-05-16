function Footer(){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const day = currentDate.getDay()
    const finalDate = `${day}-${month}-${year}`

    return(
        <footer className="footer">
            <h2 className="footer__author">
                &copy; 2023 Dennis Otwoma
            </h2>
            <p className="footer__date">{`${finalDate}`}</p>
        </footer>
    )
}

export default Footer;