"use server"

import Image from "next/image";
import Button from "@/components/Button"

export default async function Home() {
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
