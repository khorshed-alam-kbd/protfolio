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
                    title: 'Thank you for getting in touch',
                })
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <p className='text-center text-gray-400'>Get In Touch. Just send me a message, I will get back to you!.</p>

            <div className="w-full p-5 grid place-content-center ">
                <div className="mx-auto">
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
                                        <span className="label-text">Message:</span>
                                    </label>
                                    <textarea name="message" placeholder="Message" className="textarea textarea-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-outline">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <iframe className='w-full mt-10 rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12284.476071322779!2d90.36523124273663!3d23.74036812093079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4a5de53a75%3A0xf27ef22645e193c6!2sJigatola%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1692107872751!5m2!1sen!2sbd" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default ContactForm;