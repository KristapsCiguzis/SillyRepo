import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CopyBoard = ({ codeText, className = '', language = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative group w-full max-w-4xl mx-auto">
      <div className="absolute top-2 right-2 z-10">
        {language && (
          <span className="bg-gray-800/70 text-gray-300 px-2 py-1 rounded-md text-xs">
            {language}
          </span>
        )}
      </div>
      <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 bg-gray-800">
        <pre 
          className={`
            ${className} 
            p-4 pr-12 
            overflow-x-auto 
            text-gray-300 
            text-sm 
            relative
          `}
        >
          <code className="block whitespace-pre-wrap break-words">
            {codeText}
          </code>
        </pre>
        
        <div className="bg-gray-700/50 px-4 py-2 flex justify-end items-center">
          <button 
            onClick={handleCopy}
            aria-label="Copy code"
            className={`
              w-24 h-10 flex items-center justify-center 
              rounded-lg text-sm font-medium 
              transition-all duration-300 
              group/button
              ${copied 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
            `}
          >
            <span className="flex items-center">
              {copied ? (
                <>
                  <Check className="w-5 h-5 mr-2 animate-bounce" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2 group-hover/button:scale-110 transition-transform" />
                  Copy
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyBoard;