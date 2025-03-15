
import React from 'react';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { accessibilityContent } from '../utils/legalContent';

const AccessibilityPage = () => {
  return <LegalPageTemplate content={accessibilityContent} />;
};

export default AccessibilityPage;
