
import React from 'react';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { privacyPolicyContent } from '../utils/legalContent';

const PrivacyPolicyPage = () => {
  return <LegalPageTemplate content={privacyPolicyContent} />;
};

export default PrivacyPolicyPage;
