// "use client";

// import React, { useRef } from 'react';
// import { Upload } from 'lucide-react';
// import axios from 'axios';
// // import { Alert, AlertDescription, AlertTitle} from "@/components/ui/alert"
// // import { Terminal } from "lucide-react"
// const FileUpload: React.FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null);
//   // const [uploadSuccess, setUploadSuccess] = React.useState(false);
//   // const [fileName, setFileName] = React.useState<string | null>(null);

//   const handleButtonClick = () => {
//     inputRef.current?.click();
//   };

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (file.type !== 'application/pdf') {
//       alert('Please select a PDF file.');
//       e.target.value = '';
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append('pdf', file);

//       const response = await axios.post('https://rag-application-backend-jvja.onrender.com/upload/pdf', formData);
//       // setFileName(file.name);
//       // setUploadSuccess(true);
//       // setTimeout(() => {
//       //   setUploadSuccess(false);
//       //   setFileName(null);
//       // }, 5000);
//       console.log('File uploaded successfully:', response.data);
//     } catch (error) {
//       console.error('File upload failed:', error);
//     }
//     e.target.value = '';
//   };

//   return (
//     <div>
//         {/* {uploadSuccess && fileName && (
//         <Alert>
//           <Terminal className="h-4 w-4" />
//           <AlertTitle>File Uploaded</AlertTitle>
//           <AlertDescription>
//             You had successfully uploaded the file: {fileName}
//           </AlertDescription>
//         </Alert>
//       )} */}
//       <input
//         type="file"
//         accept="application/pdf"
//         ref={inputRef}
//         onChange={handleFileChange}
//         className="hidden"
//       />
//       <button
//         type="button"
//         onClick={handleButtonClick}
//         className="
//           bg-slate-800 
//           border border-white rounded-lg 
//           flex flex-col items-center 
//           px-4 py-6
//           hover:bg-slate-700
//           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
//         "
//       >
//         <Upload className="w-8 h-8 mb-2 text-white" />
//         <span className="text-white">Upload PDF</span>
//       </button>
//     </div>
//   );
// };

// export default FileUpload;
// "use client";

// import React, { useState, useRef } from 'react';
// import { Upload } from 'lucide-react';
// import axios,{AxiosError} from 'axios';
// import { Terminal } from 'lucide-react';
// import { Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

// const FileUpload: React.FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [uploadSuccess, setUploadSuccess] = useState(false);
//   const [fileName, setFileName] = useState<string | null>(null);

//   const handleButtonClick = () => {
//     inputRef.current?.click();
//   };

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
  
//     if (file.type !== 'application/pdf') {
//       alert('Please select a PDF file.');
//       e.target.value = '';
//       return;
//     }
  
//     try {
//       const formData = new FormData();
//       formData.append('pdf', file);
  
//       const response = await axios.post(
//         'https://rag-application-backend-jvja.onrender.com/upload/pdf',
//         formData
//       );
  
//       setFileName(file.name);
//       setUploadSuccess(true);
//   console.log('File uploaded successfully:', response.data);
//   alert('File uploaded successfully');
//       setTimeout(() => {
//         setUploadSuccess(false);
//         setFileName(null);
//       }, 5000);
  
//     } catch (error: unknown) {
//       console.error('File upload failed:', error);
//       setUploadSuccess(false);
  
//       if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError;
  
//         if (axiosError.response) {
//           const message = axiosError.response.data ||
//             `Server responded with status ${axiosError.response.status}`;
//           alert(`Upload failed: ${message}`);
//         } else if (axiosError.request) {
//           alert('No response from server. Please check your connection and try again.');
//         } else {
//           alert(`An unexpected Axios error occurred: ${axiosError.message}`);
//         }
//       } else {
//         if (error instanceof Error) {
//           alert(`An unexpected error occurred: ${error.message}`);
//         } else {
//           alert('An unknown error occurred.');
//         }
//       }
//     } finally {
//       e.target.value = '';
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {/* Conditionally render alert */}
//       {uploadSuccess && fileName && (
//         <Alert>
//           <Terminal className="h-4 w-4" />
//           <AlertTitle>File Uploaded</AlertTitle>
//           <AlertDescription>
//             You had successfully uploaded the file: {fileName}
//           </AlertDescription>
//         </Alert>
//       )}

//       {/* Hidden file input */}
//       <input
//         type="file"
//         accept="application/pdf"
//         ref={inputRef}
//         onChange={handleFileChange}
//         className="hidden"
//       />

//       {/* Upload button */}
//       <button
//         type="button"
//         onClick={handleButtonClick}
//         className="bg-slate-800 border border-white rounded-lg flex flex-col items-center px-4 py-6 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//       >
//         <Upload className="w-8 h-8 mb-2 text-white" />
//         <span className="text-white">Upload PDF</span>
//       </button>
//     </div>
//   );
// };

// export default FileUpload;


"use client";

import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import axios, { AxiosError } from 'axios';
import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const FileUpload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('pdf', file);

      // Add Content-Type header explicitly for file uploads
      const response = await axios.post(
        'https://rag-application-backend-jvja.onrender.com/upload/pdf',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('File uploaded successfully:', response.data);
      
      setFileName(file.name);
      setUploadSuccess(true);
      
      // Show success alert to user
      alert('File uploaded successfully');
      
      setTimeout(() => {
        setUploadSuccess(false);
        setFileName(null);
      }, 5000);

    } catch (error: unknown) {
      console.error('File upload failed:', error);
      
      setUploadSuccess(false);
      
      // Enhanced error handling
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response) {
          // Server responded with error status
          const message = axiosError.response.data?.toString() || 
                         `Server responded with status ${axiosError.response.status}`;
          alert(`Upload failed: ${message}`);
        } else if (axiosError.request) {
          // No response received
          alert('No response from server. Please check your connection and try again.');
        } else {
          // Other Axios errors
          alert(`An unexpected Axios error occurred: ${axiosError.message}`);
        }
      } else {
        // Non-Axios errors
        if (error instanceof Error) {
          alert(`An unexpected error occurred: ${error.message}`);
        } else {
          alert('An unknown error occurred.');
        }
      }
    } finally {
      setIsLoading(false);
      e.target.value = ''; // Always reset input value
    }
  };

  return (
    <div className="space-y-4">
      {/* Conditional Alert Component */}
      {uploadSuccess && fileName && (
        <Alert className="animate-fade-in-down">
          <Terminal className="h-4 w-4" />
          <AlertTitle>File Uploaded</AlertTitle>
          <AlertDescription>
            You had successfully uploaded the file: {fileName}
          </AlertDescription>
        </Alert>
      )}

      {/* Hidden File Input */}
      <input
        type="file"
        accept="application/pdf"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
        disabled={isLoading} // Prevent multiple uploads
      />

      {/* Upload Button */}
      <button
        type="button"
        onClick={handleButtonClick}
        disabled={isLoading}
        className={`
          bg-slate-800 border border-white rounded-lg 
          flex flex-col items-center px-4 py-6
          hover:bg-slate-700 transition-colors
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
        `}
      >
        {isLoading ? (
          <span className="text-white">Uploading...</span>
        ) : (
          <>
            <Upload className="w-8 h-8 mb-2 text-white" />
            <span className="text-white">Upload PDF</span>
          </>
        )}
      </button>
    </div>
  );
};

export default FileUpload;