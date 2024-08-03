import React from "react";
import { useState } from "react";

interface Image {
  src: string;
  alt: string;
}
interface Update {
  id: number;
  title: string;
  desc: string;
  image: string;
}
interface EditorProps {
  image: string;
  updates: Update;
  setUpdate: React.Dispatch<React.SetStateAction<Update>>;
  setIsOpen: (id: boolean) => void;
}
const images: Image[] = [
  {
    src: "https://media.istockphoto.com/id/1470261557/photo/lamp-light-bulb-icon-on-white-background-3d-render-concept-for-study-education-work.jpg?s=2048x2048&w=is&k=20&c=nLhX26-c13U-XLag6s0PF9nGYG2KyAGVACB2fPSyeLg=",
    alt: "robot",
  },
  {
    src: "https://media.istockphoto.com/id/1420495823/photo/metaverse-people-banner-of-couple-man-and-woman-in-virtual-reality-headsets-exploring-vr-world.jpg?s=2048x2048&w=is&k=20&c=TG39dylOVsRXtby1Xu7bydtMllOqlRcjawqLnpPNoTY=",
    alt: "robot",
  },
  {
    src: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "robot",
  },
  {
    src: "https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "robot",
  },
  {
    src: "https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "robot",
  },
];

const BannerEditor: React.FC<EditorProps> = ({
  image,
  updates,
  setUpdate,
  setIsOpen,
}) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [desc, setDesc] = useState(updates.desc);
  const [title, setTitle] = useState(updates.title);
  return (
    <div className="bg-green-300 p-6 rounded-lg text-black">
      <h2 className="text-xl font-bold mb-4 text-center"> Edit Banner </h2>
      <div className="">
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
            {selectedImage ? (
              <img
                src={selectedImage.src}
                alt="no image"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={image}
                alt="no image"
                className="w-full h-full object-fill"
              />
            )}
          </div>
        </div>
        <div className="flex gap-4 mt-5 overflow-visible">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`bg-gray-200 rounded-full cursor-pointer w-15 h-15 flex items-center justify-center ${
                selectedImage?.src === image.src
                  ? "border-2 border-blue-500"
                  : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="title" className=" text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-3 w-full rounded-md border-black  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="mt-1 block w-full p-3 rounded-md border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        onClick={() => {
          setUpdate((prev) => ({
            ...prev,
            title,
            desc,
            image: selectedImage ? selectedImage.src : image,
          }));
          setIsOpen(false);
        }}
      >
        Done
      </button>
    </div>
  );
};

export default BannerEditor;
