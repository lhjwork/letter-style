import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-200">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 className="font-semibold">My Practice</h4>
        <p className="text-sm text-slate-400 mt-2">작은 연습용 프로젝트</p>
      </div>

      <div className="text-sm">
        <h5 className="font-medium">링크</h5>
        <ul className="mt-2 space-y-1">
          <li>
            <Link to="/" className="text-slate-400 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-slate-400 hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-sm">
        <h5 className="font-medium">Contact</h5>
        <p className="text-slate-400 mt-2">email@example.com</p>
      </div>
    </div>

    <div className="border-t border-slate-800 text-slate-500 text-xs py-3">
      <div className="mx-auto px-4 max-w-6xl text-center">© 2025 My Practice. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
