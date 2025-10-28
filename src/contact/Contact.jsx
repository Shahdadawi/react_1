import style from './contact.module.css'
function Contact() {

    return <>

        <section id="contact" className="py-5">
            <div className="container">
                <h1 className={` ${style.h1} fw-bold text-uppercase mb-4 text-center `}>CONTACT ME</h1>

                <form className="mx-auto" style={{ maxWidth: '600px' }}>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label text-secondary">
                            Full name
                        </label>
                        <input
                            type="text"
                            className="form-control border-0 border-bottom rounded-0"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="form-label text-secondary">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control border-0 border-bottom rounded-0"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="form-label text-secondary">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            className="form-control border-0 border-bottom rounded-0"
                            id="phone"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="form-label text-secondary">
                            Message
                        </label>
                        <textarea
                            className="form-control border-0 border-bottom rounded-0"
                            id="message"
                            rows="3"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <div className="text-start">
                        <button
                            type="submit"
                            className="btn text-white px-4 py-2"
                            style={{ backgroundColor: '#1abc9c', borderRadius: '6px' }}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>

    </>

}
export default Contact;