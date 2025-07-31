"use server"

import Image from "next/image";
import Button from "@/components/Button"

export default async function Home() {
  let backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  let apiKey = process.env.NEXT_PUBLIC_API_KEY;
  let data;

  try {
    const response = await fetch(`${backendURL}/`, {
      headers: {
        'x-api-key': apiKey ?? '',
      },
      cache: 'no-store',
    });

    const text = await response.text();
    console.log("Raw backend response:", text);

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}: ${text}`);
    }

    data = JSON.parse(text); // or just use `text` if you know what to expect
  } catch (err) {
    console.error("Failed to fetch from backend:", err);
    throw new Error("Could not load backend data.");
  }

  var imageSize = 250;
  return (
    <div className="flex flex-col justify-between items-center h-screen py-32 px-4">
      <div className="body flex flex-col justify-center items-center  gap-8">
        <h1 className="text-7xl flex justify-center text-center font-extrabold">Glasses For Good</h1>
        <Image src="/logo.png" alt="logo" width={imageSize} height={imageSize}/>
      </div>
      <Button rel="preload" label="Get Started!" href="/signIn"/>
    </div>
  );
}
