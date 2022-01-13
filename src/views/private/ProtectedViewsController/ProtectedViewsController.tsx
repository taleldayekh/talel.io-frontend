import React, { useContext } from 'react';
import { ProtectedViewsControllerProps } from 'src/views/private/ProtectedViewsController/interfaces';
import { Navigate } from 'react-router-dom';
import { AuthenticationContext } from 'src/contexts/authentication/authentication.context';

const ProtectedViewsController: React.FC<ProtectedViewsControllerProps> = (
  props: ProtectedViewsControllerProps,
) => {
  const { children } = props;

  const { authenticationContext } = useContext(AuthenticationContext);

  return authenticationContext.isLoggedIn ? (
    (children as JSX.Element)
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedViewsController;
