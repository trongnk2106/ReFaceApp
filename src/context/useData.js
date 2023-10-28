import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AppImages } from '../assets';

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
  const CATEGORIES_TEMPLATE = [AppImages.temp_1, AppImages.temp_2, AppImages.temp_3, AppImages.temp_4, AppImages.temp_5, AppImages.temp_6];
  const CATEGORIES_PROTECT = ['Anti DreamBooth', 'DeepFake Detect'];
  const LOVELENS_TEMPLATE = [AppImages.ai_avatar , AppImages.ai_bride, AppImages.ai_groom, AppImages.ai_lovelens, AppImages.ai_reface, AppImages.ai_trustface,
                              AppImages.love1, AppImages.ai_couple, AppImages.ai_profile]
  
  const LOVELENS_MALE = [AppImages.male0, AppImages.male1, AppImages.male2, AppImages.male3, AppImages.male4,
    AppImages.male5, AppImages.male6, AppImages.male7, AppImages.male8]

  const LOVELENS_FEMALE = [AppImages.female0, AppImages.female1, AppImages.female2, AppImages.female3, AppImages.female4,
    AppImages.female5, AppImages.female6, AppImages.female7, AppImages.female8]

  const LOVELENS_COUPLE = [AppImages.couple0, AppImages.couple1, AppImages.couple2, AppImages.couple3, AppImages.couple4,
    AppImages.couple5, AppImages.couple6, AppImages.couple7, AppImages.couple8]

  const AIAVATAR_MALE = [AppImages.avatar_male1, AppImages.avatar_male2, AppImages.avatar_male3, AppImages.avatar_male4, AppImages.avatar_male5, AppImages.avater_null]
  const AIAVATAR_FEMALE = [AppImages.avatar_female1, AppImages.avatar_female2, AppImages.avatar_female3, AppImages.avatar_female4, AppImages.avatar_female5, AppImages.avater_null]


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

  const [responseChat, setResponseChat] = useState([])
  const [messages, setMessages] = useState([
		{
			user: 1,
			// time: "12:05",
			content: "Can I help you?",
      img : ''
		},
		
	]);


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
    LOVELENS_MALE, LOVELENS_FEMALE, LOVELENS_COUPLE,
    AIAVATAR_MALE, AIAVATAR_FEMALE,
    responseChat, setResponseChat,
    // messages, setMessages
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)