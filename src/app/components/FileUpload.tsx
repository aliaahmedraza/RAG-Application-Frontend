"use client";

import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import axios from 'axios';
import { Alert, AlertDescription, AlertTitle} from "@/components/ui/alert"
import { Terminal } from "lucide-react"
const FileUpload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file.');
      e.target.value = '';
      return;
    }

    try {
      const formData = new FormData();
      formData.append('pdf', file);

      const response = await axios.post('https://rag-application-backend-jvja.onrender.com/upload/pdf', formData);
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>File Uploaded</AlertTitle>
  <AlertDescription>
    You had successfully uploaded the file: {file.name}
  </AlertDescription>
</Alert>

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('File upload failed:', error);
    }
    e.target.value = '';
  };

  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={handleButtonClick}
        className="
          bg-slate-800 
          border border-white rounded-lg 
          flex flex-col items-center 
          px-4 py-6
          hover:bg-slate-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
      >
        <Upload className="w-8 h-8 mb-2 text-white" />
        <span className="text-white">Upload PDF</span>
      </button>
    </div>
  );
};

export default FileUpload;
