import * as React from 'react';

export const toastRef = React.createRef();

export const showToast = (text) => {
  toastRef.current?.show(text);
};
