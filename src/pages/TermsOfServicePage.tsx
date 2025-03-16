
import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { termsOfServiceContent } from '../utils/legalContent';

const TermsOfServicePage = () => {
  return (
    <SingleLayout section="legal">
      <LegalPageTemplate content={termsOfServiceContent} />
    </SingleLayout>
  );
};

export default TermsOfServicePage;
