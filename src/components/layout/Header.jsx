import { BrainCircuit } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary-100">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <BrainCircuit className="h-7 w-7 text-primary-500" />
            <span className="font-bold text-lg text-primary-900">GEO.inc</span>
          </a>
          <nav>
            <a href="#" className="text-sm font-semibold hover:text-primary-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
