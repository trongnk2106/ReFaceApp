import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AppImages } from '../assets';

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
  const CATEGORIES_TEMPLATE = [AppImages.temp_1, AppImages.temp_2, AppImages.temp_3, AppImages.temp_4, AppImages.temp_5, AppImages.temp_6];
  const CATEGORIES_PROTECT = ['Anti DreamBooth', 'DeepFake Detect'];
  const LOVELENS_TEMPLATE = [AppImages.ai_avatar , AppImages.ai_bride, AppImages.ai_groom, AppImages.ai_lovelens, AppImages.ai_reface, AppImages.ai_trustface,
                              AppImages.love1, AppImages.ai_couple, AppImages.ai_profile]


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

  const [imageAiReface, setImageAiReface] = useState();
  const [resultAiReface, setResultAiReface] = useState();
  const [promptAiReface, setPromptAiReface] = useState();

  const [resultAiUpScaler, setResultAiUpScaler] = useState();
  const [imageLoveLensWoman, setImageLoveLensWoman] = useState();
  const [imageLoveLensMan, setImageLoveLensMan] = useState();
  const [lovelenstemplate, setLoveLenstemplate] = useState();
  const [ismale, setIsmale] = useState('')
  const [resultLoveLens, setResultLoveLens] = useState()
  const [imagetrustface, setImagetrustface] = useState()
  const [resImagetrustface, setResImagetrustface] = useState()
  const [label, setLabel] = useState()
  const [score, setScore] = useState()

  const contextValue = {
    CATEGORIES_TEMPLATE,
    CATEGORIES_PROTECT,
    selectedCategoryPerson, setSelectedCategoryPerson,
    selectedCategoryProtect, setSelectedCategoryProtect,
    imageEnhance, setImageEnhance,
    imageGenerate, setImageGenerate,
    imageSourceSwap, setImageSourceSwap,
    imageTargetSwap, setImageTargetSwap,
    imageResultSwap, setImageResultSwap,
    prompt, setPrompt,
    imageResultGenerate, setImageResultGenerate,
    isRemove, setIsRemove,
    isEnhance, setIsEnhance,
    isUpscaler, setIsUpscaler,
    imageResultEnhance, setImageResultEnhance,
    imageSrcDreambooth, setImageSrcDreambooth,
    imageRealFace, setImageRealFace,
    imageSrcDeepFake, setImageSrcDeepFake,
    imageRealFaceDeepFake, setImageRealFaceDeepFake,
    resAnti, setResAnti,
    resDeep, setResDeep,
    imageAiProfile, setImageAiProfile,
    selectSex, setSelectSex,
    resultAiProfile, setResultAiProfile,
    imageRegenAiProfile, setImageRegenAiProfile,
    resultRegenAiProfile, setResultRegenAiProfile,
    imageAiAvatar, setImageAiAvatar,
    selectSexAiAvatar, setSelectSexAiAvatar,
    resultAiAvatar, setResultAiAvatar,
    imageRegenAiAvatar, setImageRegenAiAvatar,
    resultRegenAiAvatar, setResultRegenAiAvatar,
    promptAiAvatar, setPromptAiAvatar,
    tempAiAvatar, setTempAiAvatar,
    imageAiReface, setImageAiReface,
    resultAiReface, setResultAiReface,
    promptAiReface, setPromptAiReface,
    resultAiUpScaler, setResultAiUpScaler,

    imageLoveLensWoman, setImageLoveLensWoman,
    imageLoveLensMan, setImageLoveLensMan,
    LOVELENS_TEMPLATE,
    lovelenstemplate, setLoveLenstemplate,
    ismale, setIsmale,
    resultLoveLens, setResultLoveLens,
    imagetrustface, setImagetrustface,
    resImagetrustface, setResImagetrustface,
    label, setLabel,
    score, setScore,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)