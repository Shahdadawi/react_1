
import style from './footer.module.css'
function Footer() {

    return <footer className={`${style.footerBg} text-center text-white pt-5`}>
        <div className="container pb-4">
            <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <h5 className="text-uppercase fw-bold">Location</h5>
                    <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                    <h5 className="text-uppercase fw-bold">Around the Web</h5>
                    
                </div>

                <div className="col-md-4">
                    <h5 className="text-uppercase fw-bold">About Freelancer</h5>
                    <p className="mb-0">
                        Freelancer is a free to use, MIT licensed Bootstrap theme created by{' '}
                        <a href="#" className="text-success text-decoration-none">
                            Start Bootstrap
                        </a>.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${style.footerBottom} py-3`}>
            <p className="mb-0 small">Copyright © Your Website 2023</p>
        </div>
    </footer>

}
export default Footer;