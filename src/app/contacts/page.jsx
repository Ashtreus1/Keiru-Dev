import React from 'react';
import ContactForm from '@/components/contacts/ContactForm';
import Faq from '@/components/contacts/Faq';

const ContactOverview = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center mb-10 mx-10">
            <div className="mx-4 md:mx-20 w-full">
                <div className="p-4"> 
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-10">Interact with Me!</h2>
                </div>
                <div className="flex flex-col sm:flex-row justify-center"> 
                    <Faq /> 
                    <ContactForm /> 
                </div>
            </div>
        </div>
    );
};

export default ContactOverview;

