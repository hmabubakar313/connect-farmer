// app/page.js
"use client"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Main App</h1>
      <Link href="/crops">
        <button>Crops</button>
      </Link>
      <br></br>
      <Link href="/farmers">
        <button>Farmers</button>
      </Link>
      <br></br>
      <Link href="/users">
        <button>Users</button>
      </Link>
    </div>
  );
}
