
import React from 'react';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { returnPolicyContent } from '../utils/legalContent';

const ReturnPolicyPage = () => {
  return <LegalPageTemplate content={returnPolicyContent} />;
};

export default ReturnPolicyPage;
