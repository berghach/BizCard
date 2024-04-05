'use client';
import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <Card/>
    </main>
  );
}
