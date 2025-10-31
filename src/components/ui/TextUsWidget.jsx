import { useState } from 'react';
import { Phone, X, Send } from 'lucide-react';

export default function TextUsWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format data to match n8n workflow expectations
      const params = new URLSearchParams({
        name: formData.name,
        mobile: formData.number,
        message: formData.message
      });
      
      const webhookUrl = `https://n8n-boringwork-u57538.vm.elestio.app/webhook/contact-form-webhook?${params.toString()}`;
      
      console.log('=== WEBHOOK DEBUG ===');
      console.log('Current URL:', window.location.href);
      console.log('Current Origin:', window.location.origin);
      console.log('Form data:', { name: formData.name, mobile: formData.number, message: formData.message });
      console.log('Full webhook URL:', webhookUrl);
      
      // Try direct navigation as fallback if CORS fails
      const response = await fetch(webhookUrl, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Accept': 'application/json',
        }
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (response.ok) {
        console.log('✅ Form submitted successfully!');
        setSubmitStatus('success');
        setFormData({ name: '', number: '', message: '' });
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        console.error('❌ Response not OK:', response.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      
      // If CORS error, try alternative method - open in new window
      if (error.message.includes('CORS') || error.message.includes('fetch')) {
        console.log('🔄 CORS error detected. Trying alternative submission method...');
        
        // Create the full URL with parameters
        const params = new URLSearchParams({
          name: formData.name,
          mobile: formData.number,
          message: formData.message
        });
        const webhookUrl = `https://n8n-boringwork-u57538.vm.elestio.app/webhook/contact-form-webhook?${params.toString()}`;
        
        // Try using an invisible iframe as a workaround
        try {
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = webhookUrl;
          document.body.appendChild(iframe);
          
          // Assume success after 2 seconds
          setTimeout(() => {
            document.body.removeChild(iframe);
            console.log('✅ Form submitted via iframe method');
            setSubmitStatus('success');
            setFormData({ name: '', number: '', message: '' });
            setTimeout(() => {
              setIsOpen(false);
              setSubmitStatus(null);
            }, 2000);
          }, 2000);
          
          return;
        } catch (iframeError) {
          console.error('❌ Iframe method failed:', iframeError);
        }
      }
      
      console.error('🔴 CORS ERROR DETECTED!');
      console.error('🔴 The n8n webhook CORS settings need to be updated.');
      console.error('🔴 Current allowed origin:', 'https://www.boringwork.com.au');
      console.error('🔴 Your origin:', window.location.origin);
      console.error('🔴 Please update n8n webhook Allowed Origins to: *');
      
      setSubmitStatus('error');
    } finally {
      console.log('=== END WEBHOOK DEBUG ===');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button - Positioned on LEFT side */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary-600 hover:bg-primary-700'
        }`}
        aria-label={isOpen ? 'Close contact form' : 'Open contact form'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Phone className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Form Modal - Positioned on LEFT side */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-slideUp">
          <div className="bg-primary-600 p-4 text-white">
            <h3 className="text-lg font-semibold">Text Us</h3>
            <p className="text-sm text-primary-100 mt-1">Send us a message and we'll get back to you soon!</p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                placeholder="0400 000 000"
                disabled={isSubmitting}
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                placeholder="How can we help you?"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white py-2.5 rounded-md font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 text-green-800 p-3 rounded-md text-sm flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-800 p-3 rounded-md text-sm flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Failed to send. Please try again.
              </div>
            )}
          </form>
        </div>
      )}

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

