
import React from 'react';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { termsOfServiceContent } from '../utils/legalContent';

const TermsOfServicePage = () => {
  return <LegalPageTemplate content={termsOfServiceContent} />;
};

export default TermsOfServicePage;
