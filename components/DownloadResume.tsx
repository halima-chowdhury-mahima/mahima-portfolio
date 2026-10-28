
"use client";

import { Download } from "lucide-react";

export default function DownloadResume() {
  return (
    <a
      href="/resume/mahima-resume.pdf"
      download="Mahima-Chowdhury-Resume.pdf"
      className="inline-flex items-center gap-2 rounded-full border border-yellow-500 px-6 py-3 font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
    >
      <Download size={18} aria-hidden="true" />
      Download Resume
    </a>
  );
}
