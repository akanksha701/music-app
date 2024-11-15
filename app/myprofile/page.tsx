"use client";
import { auth } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { DatePicker } from "@nextui-org/react";

interface userData {
  firstName?: string | undefined;
  lastName?: string | undefined;
  emailAddresses?: string | undefined;
  file?: MediaCapabilities | null;
}
const MyProfile = () => {
  const router = useRouter();
  const userData = useState<userData>({
    firstName: undefined,
    lastName: undefined,
    file: undefined,
    emailAddresses: undefined,
  });
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-cover bg-profile-bg">
      <div className="absolute right-20  sm:max-w-xl sm:mx-auto">
        <div className="px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block relative">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center relative">
                  <img
                    id="preview"
                    className="h-24 w-24 rounded-full "
                    src={file}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="file"
                    id="profile-upload"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="block pl-2 font-semibold text-xl text-gray-700">
                <h2 className="leading-relaxed">Edit Profile</h2>
                <p className="text-sm text-gray-500 font-normal">
                  Update your personal details here
                </p>
              </div>
            </div>

            <form className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">First Name</label>
                  <input
                    value={user?.firstName || ""}
                    disabled={true}
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">Last Name</label>
                  <input
                    value={user?.firstName || ""}
                    disabled={true}
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">Email</label>
                  <input
                    type="email"
                    // value={user?.emailAddresses}
                    disabled={true}
                    className="px-4 py-2 border bg-gray-100 w-full sm:text-sm border-gray-300 rounded-md text-gray-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">Date of Birth</label>
                  <DatePicker
                    label="Zoned Date Time"
                    className="max-w-xs"
                    labelPlacement="outside"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">Gender</label>
                  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                  onClick={() => router.push("/")}
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>{" "}
                  Cancel
                </button>
                <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
