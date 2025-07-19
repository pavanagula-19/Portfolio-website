import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-white text-gray-900 px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Let’s discuss your Project
          </h2>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white p-3 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-gray-700">Hyderabad, Telangana, India</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white p-3 rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-semibold">My Email:</p>
                <p className="text-gray-700">pavanagulla19@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white p-3 rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-semibold">Call Me Now:</p>
                <p className="text-gray-700">+91-960-303-2125</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            {["facebook", "dribbble", "instagram", "linkedin"].map(
              (icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition"
                >
                  <i className={`fa-brands fa-${icon}`}></i>
                </a>
              )
            )}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="space-y-4">
          <p className="text-gray-500 max-w-md">
            Ready to bring your idea to life? Whether you need a scalable
            backend, a stunning frontend, or a complete fullstack solution — I’d
            love to hear more about your project.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border-b-2 border-gray-300 outline-none py-2 bg-transparent focus:border-purple-500 transition duration-200"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border-b-2 border-gray-300 outline-none py-2 bg-transparent focus:border-purple-500 transition duration-200"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border-b-2 border-gray-300 outline-none py-2 bg-transparent focus:border-purple-500 transition duration-200"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Budget*"
                className="w-full border-b-2 border-gray-300 outline-none py-2 bg-transparent focus:border-purple-500 transition duration-200"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full border-b-2 border-gray-300 outline-none py-2 bg-transparent focus:border-purple-500 transition duration-200"
              />
            </div>
            <textarea
              placeholder="Message*"
              rows={3}
              className="w-full border-b-2 border-gray-300 outline-none py-2 bg-transparent focus:border-purple-500 transition duration-200"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-purple-700 transition"
            >
              Submit <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
