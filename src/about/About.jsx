
import style from './about.module.css'
function About() {

    return <>
        <section
            id="about"
            className={`${style.aboutsection} text-center text-white py-5`}
          
        >
            <div className="container">
                <h2 className="text-uppercase fw-bold mb-4">About</h2>

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <p className="lead">
                            Freelancer is a free bootstrap theme created by Start Bootstrap.
                            The download includes the complete source files including HTML,
                            CSS, and JavaScript as well as optional SASS stylesheets for easy
                            customization.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <p className="lead">
                            You can create your own custom avatar for the masthead, change the
                            icon in the dividers, and add your email address to the contact
                            form to make it fully functional!
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        className="btn btn-outline-light btn-lg d-inline-flex align-items-center gap-2"
                    >
                        <i className="bi bi-download"></i> Free Download!
                    </button>
                </div>
            </div>
        </section>
    </>

}
export default About;