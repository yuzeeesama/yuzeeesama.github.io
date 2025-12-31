import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-center border-t border-slate-200/60 mt-20">
      <p className="text-slate-400 text-sm">
        © {PROFILE.year} {PROFILE.name}. All rights reserved.
      </p>
      <p className="text-slate-300 text-xs mt-2">
        Built with React & Tailwind
      </p>
    </footer>
  );
};

export default Footer;