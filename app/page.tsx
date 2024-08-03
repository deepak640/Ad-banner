"use client";
import { useState } from "react";
import banners from "./data/banners.json";
import BannerImageComp from "./components/BannerImageComp";
import Modal from "react-modal";
import EditBannerTemplatesBs from "./components/EditBannerTemplateBs";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: 0,
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const BannerBot = () => {
  const [prompt, setPrompt] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Updates, setUpdate] = useState({
    title: "",
    desc: "",
    id: 99,
    image: "",
  });
  const [image, setImage] = useState("");

  const generateBanners = () => {
    // TODO: Implement logic to generate banners based on the prompt
    alert("Generating banners");
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-1 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center mt-10">BannerBot</h1>
      <p className="text-lg mb-8 text-center">AI Banner Maker</p>
      <label htmlFor="prompt" className="block mb-2 text-white">
        Enter prompt to generate banners
      </label>
      <div className="bg-white p-4 w-3/6 rounded-lg shadow-lg">
        <textarea
          id="prompt"
          className="appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          placeholder="Create banners for GrowEasy, an AI powered lead generation tool"
        />
      </div>
      <button
        className="bg-green-900 text-white font-bold py-2 px-4 mt-5 rounded-lg focus:outline-none focus-shadow-outline"
        onClick={generateBanners}
      >
        Generate Banners
      </button>
      <p className="mt-4 text-center text-white-500">
        Looking to create video?
      </p>
      <div className="grid grid-cols-2 gap-2 mt-5 mb-2">
        {banners.map((item, index) => {
          return (
            <>
              <BannerImageComp
                key={index}
                id={index}
                title={Updates.id === index ? Updates.title : item.title}
                description={
                  Updates.id === index ? Updates.desc : item.description
                }
                cta={item.cta}
                setUpdate={setUpdate}
                image={item.image}
                newImage={Updates.id === index ? Updates.image : ''}
                textPosition={item.textPosition}
                textColor={item.textColor}
                imgPosition={item.imgPosition}
                imgShape={item.imgShape}
                imgBorderTouch={item.imgBorderTouch}
                buttonPosition={item.buttonPosition}
                setIsOpen={setIsOpen}
                setImage={setImage}
              />
            </>
          );
        })}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
        >
          <EditBannerTemplatesBs
            image={image}
            setUpdate={setUpdate}
            updates={Updates}
            setIsOpen={setIsOpen}
          />
        </Modal>
      </div>
    </div>
  );
};

export default BannerBot;
