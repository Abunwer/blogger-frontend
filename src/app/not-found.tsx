import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-lightest">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-burnt-orange mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6 text-black">Lost in the Desert</h2>
        <p className="text-sand-dark text-lg mb-8 max-w-md mx-auto">
          This page doesn't exist. Let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-burnt-orange text-white font-bold rounded-lg hover:bg-orange-light transition-colors shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

