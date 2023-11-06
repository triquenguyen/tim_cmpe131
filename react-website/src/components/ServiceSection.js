import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ServiceSection.css';

function SupportFAQs() {
    return (
        <section id="support-faqs">
            <h2>Support FAQs</h2>
            <nav>
                <ul>
                    <li><a href="#support-faqs">Support FAQs</a></li>
                    {/* Add links to support FAQs here */}
                </ul>
            </nav>
            {/* Add frequently asked questions and answers here */}
        </section>
    );
}

function CustomerSupportForums() {
    return (
        <section id="customer-forums">
            <h2>Customer Support Forums</h2>
            <nav>
                <ul>
                    <li><a href="#customer-forums">Customer Support Forums</a></li>
                    {/* Add links and descriptions for support forums */}
                </ul>
            </nav>
            {/* Include links and descriptions for support forums */}
        </section>
    );
}

// ... other components for different sections

function ServiceSection() {
  return (
    <div>
        {/* ... other components */}
        <SupportFAQs />
        <CustomerSupportForums />
        {/* Include other components for different sections */}
    </div>
  );
}

export default ServiceSection;