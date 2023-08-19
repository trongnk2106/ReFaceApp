import React, { useCallback, useContext, useEffect, useState } from 'react'

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
  const CATEGORIES_PERSONALIZE = ['Face Swap', 'Face Generator', 'Face Enhance'];
  const CATEGORIES_PROTECT = ['Anti DreamBooth', 'DeepFake Detect'];
  const [selectedCategoryPerson, setSelectedCategoryPerson] = useState('Ui/Ux');
  const [selectedCategoryProtect, setSelectedCategoryProtect] = useState('Ui/Ux');
  const [imageEnhance, setImageEnhance] = useState();
  const [imageGenerate, setImageGenerate] = useState();
  const [imageSourceSwap, setImageSourceSwap] = useState();
  const [imageTargetSwap, setImageTargetSwap] = useState();
  const [imageSrcDreambooth, setImageSrcDreambooth] = useState();
  const [imageRealFace, setImageRealFace] = useState();
  const [imageSrcDeepFake, setImageSrcDeepFake] = useState();
  const [imageRealFaceDeepFake, setImageRealFaceDeepFake] = useState();
  const [prompt, setPrompt] = useState()

  const [isRemove, setIsRemove] = useState(false)
  const [isEnhance, setIsEnhance] = useState(false)
  const [isUpscaler, setIsUpscaler] = useState(false)

  const [imageResultSwap, setImageResultSwap] = useState();
  const [imageResultGenerate, setImageResultGenerate] = useState();
  const [imageResultEnhance, setImageResultEnhance] = useState();
  const [resAnti, setResAnti] = useState();
  const [resDeep, setResDeep] = useState();

  const contextValue = {
    CATEGORIES_PERSONALIZE,
    CATEGORIES_PROTECT,
    selectedCategoryPerson,
    setSelectedCategoryPerson,
    selectedCategoryProtect,
    setSelectedCategoryProtect,
    imageEnhance,
    setImageEnhance,
    imageGenerate,
    setImageGenerate,
    imageSourceSwap,
    setImageSourceSwap,
    imageTargetSwap,
    setImageTargetSwap,
    imageResultSwap,
    setImageResultSwap,
    prompt,
    setPrompt,
    imageResultGenerate,
    setImageResultGenerate,
    isRemove, setIsRemove,
    isEnhance, setIsEnhance,
    isUpscaler, setIsUpscaler,
    imageResultEnhance,
    setImageResultEnhance,
    imageSrcDreambooth,
    setImageSrcDreambooth,
    imageRealFace,
    setImageRealFace,
    imageSrcDeepFake, 
    setImageSrcDeepFake,
    imageRealFaceDeepFake,
    setImageRealFaceDeepFake,
    resAnti,
    setResAnti,
    resDeep,
    setResDeep
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)