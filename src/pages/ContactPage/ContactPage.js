import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function ContactPage() {
  return (
    <div className="contact-page-containers">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;