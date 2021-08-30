import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const ProtectedView: React.FC<RouteProps> = (props: RouteProps) => {
  return <Route {...props} />;
};

export default ProtectedView;
