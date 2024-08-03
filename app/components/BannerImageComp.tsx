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
  imgPosition: string;
  imgShape: string;
  newImage: string;
  textColor: string;
  imgBorderTouch: boolean;
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
  imgPosition,
  imgShape,
  imgBorderTouch,
  newImage,
  textColor,
}) => {
  return (
    <div
      className="relative h-[400px] min-w-96 bg-cover overflow-hidden box"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`absolute ${
          textPosition === "top-center"
            ? "top-10 left-20"
            : textPosition === "top-left"
            ? "top-16 left-8"
            : "bottom-10 left-2"
        } text-${textColor == "white" ? "white" : "black"}`}
      >
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
      <div
        className={`img absolute ${imgPosition ? imgPosition : ""} ${
          imgShape ? imgShape : ""
        } ${imgBorderTouch ? "imgBorderTouch" : ""}`}
      >
        {newImage ? (
          <img className="inner" src={newImage} alt="" />
        ) : (
          <div className="inner"></div>
        )}
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
        className="right-0 top-0 absolute text-white text-xl p-4"
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
