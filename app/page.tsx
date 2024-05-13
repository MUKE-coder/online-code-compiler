import EditorComponent from "@/components/EditorComponent";
import { ModeToggleBtn } from "@/components/mode-toggle-btn";
import React from "react";

export default function Home() {
  return (
    <div className="dark:bg-slate-800 bg-slate-300 p-8">
      <EditorComponent />
    </div>
  );
}
