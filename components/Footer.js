"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#141414'}} className="w-full text-neutral-400 py-3 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Image
            src="/eu-logo.png"
            alt="Microbites Logo"
            width={100}
            height={30}
            className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-xs text-white">© 2024 Microbites.</p>
        </div>
        <div className="mt-34">
        </div>
      </div>
    </footer>
  );
}