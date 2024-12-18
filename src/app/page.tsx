'use client'
import Editor from "@/components/Editor";
import { useState } from "react";
export default function Home() {
const [isRoboto, setIsRoboto] = useState(false);

  return (
   <main>
    <br />
    <Editor/>
   </main>
  );
}
