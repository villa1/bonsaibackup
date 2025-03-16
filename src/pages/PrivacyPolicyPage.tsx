
import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { privacyPolicyContent } from '../utils/legalContent';

const PrivacyPolicyPage = () => {
  return (
    <SingleLayout section="legal">
      <LegalPageTemplate content={privacyPolicyContent} />
    </SingleLayout>
  );
};

export default PrivacyPolicyPage;
