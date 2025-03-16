
import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { cookiePolicyContent } from '../utils/legalContent';

const CookiePolicyPage = () => {
  return (
    <SingleLayout section="legal">
      <LegalPageTemplate content={cookiePolicyContent} />
    </SingleLayout>
  );
};

export default CookiePolicyPage;
