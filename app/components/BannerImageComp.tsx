import { EditOutlined } from "@ant-design/icons";
import React from "react";

interface Update {
  id: number;
  title: string;
  desc: string;
  image: string;
}

interface BannerProps {
  title: string;
  description: string;
  id: number;
  cta: string;
  image: string;
  setIsOpen: (id: boolean) => void;
  setImage: (id: string) => void;
  textPosition: string;
  setUpdate: React.Dispatch<React.SetStateAction<Update>>;
  buttonPosition: string;
}

const BannerImageComp: React.FC<BannerProps> = ({
  image,
  textPosition,
  buttonPosition,
  title,
  description,
  cta,
  setIsOpen,
  setImage,
  setUpdate,
  id,
}) => {
  return (
    <div
      className="relative h-[400px] min-w-96 bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`absolute ${
          textPosition === "top-center"
            ? "top-10 left-20"
            : textPosition === "top-left"
            ? "top-16 left-8"
            : "bottom-10 left-2"
        }`}
      >
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
      <button
        className={`absolute ${
          buttonPosition === "top-right"
            ? "top-3 right-3"
            : buttonPosition === "bottom-left"
            ? "bottom-10 left-16"
            : "bottom-10 left-16 rounded-sm bg-white text-blue-700 py-2 px-2"
        }`}
      >
        {cta}
      </button>
      <EditOutlined
        className="right-3 top-3 absolute"
        onClick={() => {
          setIsOpen(true);
          setImage(image);
          setUpdate((prev) => ({
            ...prev,
            id: id,
            title,
            desc: description,
            image,
          }));
        }}
      />
    </div>
  );
};

export default BannerImageComp;
