import React from 'react';
import { ProtectedViewsControllerProps } from 'src/views/private/ProtectedViewsController/interfaces';
import { Navigate } from 'react-router-dom';

const ProtectedViewsController: React.FC<ProtectedViewsControllerProps> = (
  props: ProtectedViewsControllerProps,
) => {
  const { children } = props;

  const isLoggedIn = false; // ! Replace

  return isLoggedIn ? (children as JSX.Element) : <Navigate to="/login" />;
};

export default ProtectedViewsController;
