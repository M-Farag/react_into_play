import { useState } from 'react';

const Contact = () => {

    const [requestParams, setRequestParams] = useState({
        name: "",
        email: "",
        message: "",
      });


    return (
        <div className="content">
            <h2>Contact page</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const formData =  new FormData(e.target);
                const obj = {
                    name: formData.get("name") ?? '',
                    email: formData.get("email") ?? '',
                    message: formData.get("message") ?? '',
                
                }
        
                setRequestParams(obj);
                console.log(requestParams);
            }}
            
            >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name='message'
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;