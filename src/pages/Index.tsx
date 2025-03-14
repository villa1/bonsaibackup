
import React from "react";
import ContentLayout from "@/components/ContentLayout";
import { ContentProvider } from "@/contexts/ContentContext";
import "@/styles/markdown.css"; // Import markdown styles

const Index = () => {
  return (
    <ContentProvider>
      <ContentLayout />
    </ContentProvider>
  );
};

export default Index;
