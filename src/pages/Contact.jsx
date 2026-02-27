import Footer from "../components/footer/Footer";

const Contact = () => (
  <div>
    
    <div className="max-w-md mx-auto my-20 p-20 border border-gray-100 rounded-3xl shadow-xl bg-white ">
    <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
    <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 bg-gray-50 rounded-xl outline-indigo-500" />
    <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 bg-gray-50 rounded-xl outline-indigo-500" />
    <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:opacity-90">Send Message</button>
  
  </div>
  <Footer/>
  </div>
  
);

export default Contact;