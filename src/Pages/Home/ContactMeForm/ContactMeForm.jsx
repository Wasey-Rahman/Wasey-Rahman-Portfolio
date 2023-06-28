import React, { useState } from 'react';

const ContactMeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Display the form data in the console
        console.log(formData);
        // Reset form data
        setFormData({ name: '', email: '', message: '' });
      };
    return (
        <>
       <h1 className='font-extrabold text-4xl text-pink-500 text-center mt-32'>Get In Touch</h1>
       <div className="container mx-auto py-8">
      <div className="flex space-x-8">
        <div className="w-1/2">
          <div className="bg-gray-200 rounded-lg shadow-lg p-6">
          
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Address</h3>
              <p>161/6/A, M.A.Halim Road, Monami House, Baganbari,Dhaka 
Cantonment, Dhaka </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>01928832311</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Email</h3>
              <p>waseyrahman19@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-gray-200 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full mt-1"
                  placeholder="Enter your message"
                  rows={4}
                ></textarea>
              </div>
             
              <button className="btn btn-outline">Send Message</button>
               
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactMeForm;