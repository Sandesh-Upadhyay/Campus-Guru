import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, MessageSquare, Check } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Us',
      details: 'support@collegereview.com',
      description: 'Get in touch with our support team',
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9am-6pm EST',
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Visit Us',
      details: '123 Education Street',
      description: 'New York, NY 10001',
    },
  ];

  const officeLocations = [
    {
      city: 'New York',
      address: '123 Education Street, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
    {
      city: 'San Francisco',
      address: '456 Tech Avenue, CA 94105',
      phone: '+1 (555) 987-6543',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
    {
      city: 'Boston',
      address: '789 College Road, MA 02108',
      phone: '+1 (555) 456-7890',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="py-16">
      {/* Purple Section with Logo Design and Characters */}
      <div className="relative bg-[#b384f6] rounded-xl overflow-hidden">
        <div className="absolute top-0 right-0">
          <div className="bg-white/10 rounded-full w-48 h-48 -mr-24 -mt-24"></div>
        </div>
        <div className="absolute bottom-0 left-0">
          <div className="bg-white/10 rounded-full w-36 h-36 -ml-16 -mb-16"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  {/* N-shaped design with characters */}
                  <div className="relative">
                    <div className="bg-white transform -rotate-12 w-full h-96 rounded-3xl shadow-xl">
                      <div className="absolute top-5 left-8">
                        <img 
                          src="/lovable-uploads/ab8539ca-5225-4545-a4c5-f13bb5025e3a.png" 
                          alt="Character 1"
                          className="w-36 h-36 object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute top-5 right-8">
                        <img 
                          src="/lovable-uploads/ab8539ca-5225-4545-a4c5-f13bb5025e3a.png" 
                          alt="Character 2"
                          className="w-36 h-36 object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <img 
                          src="/lovable-uploads/ab8539ca-5225-4545-a4c5-f13bb5025e3a.png" 
                          alt="Character 3"
                          className="w-36 h-36 object-cover rounded-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch With Us
              </h2>
              <p className="text-lg mb-8 text-white/90">
                We're here to help you with any questions about colleges, reviews, or our platform. 
                Our dedicated team is ready to assist you in making informed decisions about your educational journey.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-white/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-white/90">24/7 Support Available</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-white/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-white/90">Expert Guidance for College Selection</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-white/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-white/90">Personalized Solutions for Your Needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 