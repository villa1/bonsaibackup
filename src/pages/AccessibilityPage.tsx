
import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { accessibilityContent } from '../utils/legalContent';

const AccessibilityPage = () => {
  return (
    <SingleLayout section="legal">
      <LegalPageTemplate content={accessibilityContent} />
    </SingleLayout>
  );
};

export default AccessibilityPage;
