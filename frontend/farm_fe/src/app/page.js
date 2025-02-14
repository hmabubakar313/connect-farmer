// app/page.js
"use client"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Main App</h1>
      <Link href="/crops">
        <button>Go to Crops</button>
      </Link>
    </div>
  );
}
