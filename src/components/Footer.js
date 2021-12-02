import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className={`footer bg-dark text-white w-100 d-flex flex-column align-items-center py-5 px-0 d-block`}>
            <h5 className=" mb-3">SuperHero Team</h5>
            <p className="text-center text-light">
                Website developed for Alkemy's challenge React
                <br className="" /> by <strong>Astrid Mata</strong>
            </p>
            <div className="d-flex justify-content-center w-100">
                <Link href="https://github.com/AstridMata" target="_blank" rel="noreferrer">
                    <i className="bi bi-github text-light fs-2" ></i>
                </Link>
               
            </div>
            <p className="text-light footer__data mt-2">2021 | Buenos Aires, Argentina </p>
        </footer>
    )
}

export default Footer;