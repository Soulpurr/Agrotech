"use client";
import Navbar from "@/Components/Navbar/Navbar";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { red } from "tailwindcss/colors";
import { BeatLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const ImageUploader = ({ params }) => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setres] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const handleclick = async () => {
    setisLoading(true);
    if (!selectedFile) {
      setError("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fetch(
      "https://potato-disease-yu3g.onrender.com/predict",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    setres(data);
    console.log(data);
    setisLoading(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className="bg-green-400 h-screen">
      <Navbar />

      <div className="">
        <div className="flex justify-center text-6xl font-serif text-black">
          {params?.slug}
        </div>

        <section className="container w-full mx-auto items-center py-10">
          <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
            <div className="px-4 py-6">
              <div
                id="image-preview"
                className={`max-w-sm p-6 mb-4 ${
                  selectedFile
                    ? "bg-white"
                    : "bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg"
                }`}
              >
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    className="max-h-48 rounded-lg mx-auto"
                    alt="Image preview"
                  />
                ) : (
                  <label htmlFor="upload" className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-700 mx-auto mb-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                      Upload picture
                    </h5>
                    <p className="font-normal text-sm text-gray-400 md:px-6">
                      Choose photo size should be less than{" "}
                      <b className="text-gray-600">2mb</b>
                    </p>
                    <p className="font-normal text-sm text-gray-400 md:px-6">
                      and should be in{" "}
                      <b className="text-gray-600">JPG, PNG, or GIF</b> format.
                    </p>
                    <span
                      id="filename"
                      className="text-gray-500 bg-gray-200 z-50"
                    ></span>
                  </label>
                )}
                <input
                  id="upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <label
                    htmlFor="upload"
                    className={`w-full text-white ${
                      selectedFile ? "bg-[#050708]" : "bg-gray-400"
                    } hover:bg-${
                      selectedFile ? "#050708" : "gray-400"
                    }/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer`}
                  >
                    <span className={"text-center ml-2"}>Upload</span>
                  </label>
                </div>
              </div>
              <div
                onClick={handleclick}
                className="flex bg-red-400 p-2 rounded-lg cursor-pointer items-center justify-center"
              >
                Check
              </div>
              <div className="flex justify-center">
                <BeatLoader
                  color="#8B8000"
                  loading={isLoading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </div>
          </div>
        </section>
        {res && (
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-red-600">
              Label-{res?.label?.slice(9)}
            </div>
            <div className="text-4xl text-yellow-50">
              Accuracy---{res?.confidence}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
