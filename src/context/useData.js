import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AppImages } from '../assets';

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
  const CATEGORIES_TEMPLATE = [AppImages.temp_1, AppImages.temp_2, AppImages.temp_3, AppImages.temp_4, AppImages.temp_5, AppImages.temp_6];
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

  const [imageAiProfile, setImageAiProfile] = useState();
  const [selectSex, setSelectSex] = useState();
  const [resultAiProfile, setResultAiProfile] = useState();
  const [imageRegenAiProfile, setImageRegenAiProfile] = useState();
  const [resultRegenAiProfile, setResultRegenAiProfile] = useState();

  const [imageAiAvatar, setImageAiAvatar] = useState();
  const [selectSexAiAvatar, setSelectSexAiAvatar] = useState();
  const [resultAiAvatar, setResultAiAvatar] = useState();
  const [promptAiAvatar, setPromptAiAvatar] = useState();
  const [tempAiAvatar, setTempAiAvatar] = useState();
  const [imageRegenAiAvatar, setImageRegenAiAvatar] = useState();
  const [resultRegenAiAvatar, setResultRegenAiAvatar] = useState();


  const contextValue = {
    CATEGORIES_TEMPLATE,
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
    setResDeep,
    imageAiProfile,
    setImageAiProfile,
    selectSex,
    setSelectSex,
    resultAiProfile,
    setResultAiProfile,
    imageRegenAiProfile, setImageRegenAiProfile,
    resultRegenAiProfile, setResultRegenAiProfile,
    imageAiAvatar, setImageAiAvatar,
    selectSexAiAvatar, setSelectSexAiAvatar,
    resultAiAvatar, setResultAiAvatar,
    imageRegenAiAvatar, setImageRegenAiAvatar,
    resultRegenAiAvatar, setResultRegenAiAvatar,
    promptAiAvatar, setPromptAiAvatar,
    tempAiAvatar, setTempAiAvatar

  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)