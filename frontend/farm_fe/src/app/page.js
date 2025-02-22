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
      <br></br>
      <Link href="/farmers">
        <button>Go to farmers</button>
      </Link>
      <Link href="/users">
        <button>Go to farmers</button>
      </Link>
    </div>
  );
}
