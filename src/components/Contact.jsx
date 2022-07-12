import React,{ useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    });
    
    const inputEvent = (event) => {
        const {name, value} = event.target;     
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value, 
            }
        })     
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `
            My name is ${data.fullname}.
            My mobile number is ${data.phone}.
            My email is ${data.email}.
            I am saying ${data.message}.
            `
        );
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label 
                                    htmlFor="exampleFormControlInput1" 
                                    className="form-label">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" id="exampleFormControlInput1" 
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name" 
                                />
                            </div>
                            <div className="mb-3">
                                <label 
                                    htmlFor="exampleFormControlInput1" 
                                    className="form-label">
                                    Phone
                                </label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    maxLength="10" 
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder="Phone/mobile_number" 
                                />
                            </div>
                            <div className="mb-3">
                                <label 
                                    htmlFor="exampleFormControlInput1" 
                                    className="form-label">
                                    Email address
                                </label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com" 
                                />
                            </div>
                            <div className="mb-3">
                                <label 
                                    htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Message
                                </label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    name="message"
                                    value={data.message}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Message">
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
