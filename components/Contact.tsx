import React, { useState } from 'react';
import { Phone, Mail, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "ademijuomotomiwa@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-charcoal dark:bg-darkbg text-white pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Let's create something <br />
              <span className="text-terracotta italic">enduring.</span>
            </h2>
            <p className="font-sans text-gray-400 max-w-md leading-relaxed">
              Open for ghostwriting, editorial projects, and creative collaborations.
              Let's discuss how to bring structure to your vision.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            {/* Phone */}
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-terracotta">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mb-1">Call</p>
                <p className="font-serif text-xl">0810 349 8482</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-terracotta">
                <Mail size={20} />
              </div>
              <div className="group relative">
                <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <div className="flex items-center space-x-3">
                  <p className="font-serif text-xl break-all">{email}</p>
                  <button
                    onClick={copyToClipboard}
                    className="text-gray-500 hover:text-terracotta transition-colors focus:outline-none"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
                {copied && (
                  <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs text-terracotta font-sans">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-sans">
          <p>&copy; {new Date().getFullYear()} Ademiju Omotomiwa. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with ❤️ by <a href="https://wa.me/2347038558332" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors">Abdulwahab</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;