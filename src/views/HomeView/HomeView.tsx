import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeView: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ! Temporary redirect
    navigate('/articles');
  });

  return null;
};

export default HomeView;
