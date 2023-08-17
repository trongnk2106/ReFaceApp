import React, { useCallback, useContext, useEffect, useState } from 'react'

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
  const CATEGORIES_PERSONALIZE = ['Face Swap', 'Face Generator', 'Face Enhance'];
  const CATEGORIES_PROTECT = ['Face Checking', 'Feature B', 'Feature C', 'Feature D', 'Feature E', 'Feature F'];
  const [selectedCategoryPerson, setSelectedCategoryPerson] = useState('Ui/Ux');
  const [selectedCategoryProtect, setSelectedCategoryProtect] = useState('Ui/Ux');
  const [imageEnhance, setImageEnhance] = useState();
  const [imageGenerate, setImageGenerate] = useState();
  const [imageSourceSwap, setImageSourceSwap] = useState();
  const [imageTargetSwap, setImageTargetSwap] = useState();


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
    setImageTargetSwap
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)