// component should run in the client-side environment when using Next.js.
"use client";

import Image from "next/image";
import React, { useCallback } from "react";
// A hook from the react-dropzone library that provides drag-and-drop file uploading functionality.
import { useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  //files:. It holds the files that have been uploaded.
  files: File[] | undefined;
  //onChange: A function that is called when files are uploaded, passing the uploaded files as an argument.
  onChange: (files: File[]) => void;
};

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  // This hook ensures that the onDrop function is not re-created on every render, which can help optimize performance.
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // This function is called when files are dropped into the dropzone.
    onChange(acceptedFiles);
  }, []);
  //getRootProps and getInputProps: These are functions provided by useDropzone to bind the necessary props to the dropzone area and the file input element.
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    //Applied to the container <div>, it binds the necessary event handlers and props to make it a functional dropzone.
    <div {...getRootProps()} className="file-upload">
      {/* getInputProps(): Applied to the <input>, it connects the file input element to the dropzone. */}
      <input {...getInputProps()} />
      {/* If there are files (files && files?.length > 0), the first file is displayed using the Image component. */}
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="uploaded image"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          {/* If no files are uploaded, a placeholder is shown, including an upload icon and instructions for uploading files. */}
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="upload"
          />
          <div className="file-upload_label">
            <p className="text-14-regular ">
              <span className="text-green-500">Click to upload </span>
              or drag and drop
            </p>
            <p className="text-12-regular">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default FileUploader;
