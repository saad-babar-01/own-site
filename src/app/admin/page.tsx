"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function AdminPage() {
  // client-side session
  const { data: session, status } = useSession();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/contact")
        .then((res) => res.json())
        .then((data) => setContacts(data.data || []));
    }
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;

  if (status === "unauthenticated") {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Admin Login</h1>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Panel - Contacts</h1>
        <button
          onClick={() => signOut()}
          className="p-2 bg-red-500 text-white rounded"
        >
          Sign Out
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c: any) => (
            <tr key={c._id}>
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.email}</td>
              <td className="p-2 border">{c.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
