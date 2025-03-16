
import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { returnPolicyContent } from '../utils/legalContent';

const ReturnPolicyPage = () => {
  return (
    <SingleLayout section="legal">
      <LegalPageTemplate content={returnPolicyContent} />
    </SingleLayout>
  );
};

export default ReturnPolicyPage;
