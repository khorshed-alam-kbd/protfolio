import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2sx154s', 'template_08ncu6k', form.current, 'KP_kKYTCrD-5nwdwl')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Massage is sending successfully',
                })
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <p className='text-center'>Get In Touch. Just send me a message, I will get back to you!.</p>
            <div className="hero bg-base-100 my-5">
                <div className="">
                    <div className="card w-full shadow-2xl bg-base-200">
                        <div className="card-body">
                            <form ref={form} onSubmit={sendEmail} className='lg:w-80'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name:</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number:</span>
                                    </label>
                                    <input type="text" name="user_phoneNumber" placeholder="Phone Number" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Massage:</span>
                                    </label>
                                    <textarea name="message" placeholder="Massage" className="textarea textarea-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;