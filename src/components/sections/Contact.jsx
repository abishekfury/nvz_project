import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleWhatsApp = () => {
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const url = `https://wa.me/917358755490?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 sm:py-20 relative bg-stone-50 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/70"></div>

      <RevealOnScroll>
        <div className="px-4 w-full max-w-4xl z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-amber-400 font-serif">
              Let's Design Your Space
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-amber-500 mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-stone-200 mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto">
              Ready to transform your space? Share your vision with our design team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <form className="space-y-4 sm:space-y-6 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-stone-200/30">
              <h3 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-2 font-serif">
                Send us a message
              </h3>
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-stone-50 border border-stone-300 px-4 py-2 sm:py-3 rounded-lg text-stone-800 transition focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm sm:text-base"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  placeholder="Phone Number"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-stone-50 border border-stone-300 px-4 py-2 sm:py-3 rounded-lg text-stone-800 transition focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm sm:text-base"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  placeholder="Tell us about your project..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-stone-50 border border-stone-300 px-4 py-2 sm:py-3 rounded-lg text-stone-800 transition focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm sm:text-base"
                />
              </div>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-amber-600 hover:bg-amber-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium shadow-md transition-all text-sm sm:text-base"
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                <span>Chat on WhatsApp</span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="bg-stone-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl text-stone-100 border border-stone-700/50">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-serif text-amber-400">
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <FaPhoneAlt className="text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                    <a href="tel:7358755490" className="text-stone-300 hover:text-amber-400 transition text-xs sm:text-sm">
                      +91 7358755490
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <FiMail className="text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Email</h4>
                    <a href="mailto:nivuzzdesign@gmail.com" className="text-stone-300 hover:text-amber-400 transition text-xs sm:text-sm">
                      nivuzzdesign@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <FaMapMarkerAlt className="text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Office Address</h4>
                    <p className="text-stone-300 text-xs sm:text-sm">
                      37, KaliKunram Main Rd, Kazhikundram, Tharamani, Chennai, Tamil Nadu 600113
                    </p>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-stone-700/50">
                  <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Working Hours</h4>
                  <p className="text-stone-300 text-xs sm:text-sm">
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: 10AM - 4PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
