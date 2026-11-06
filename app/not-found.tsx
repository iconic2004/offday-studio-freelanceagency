import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#080808] text-white p-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">404</h1>
      <p className="text-neutral-400 mb-8 text-lg">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#315CFF] text-white font-medium hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </main>
  );
}

