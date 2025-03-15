
import React from 'react';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { cookiePolicyContent } from '../utils/legalContent';

const CookiePolicyPage = () => {
  return <LegalPageTemplate content={cookiePolicyContent} />;
};

export default CookiePolicyPage;
