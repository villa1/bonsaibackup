
import React, { createContext, useContext, useState } from "react";
import { ContentItem } from "../types/content";
import { getContent, sampleContentTree } from "../data/sampleContent";

interface ContentContextType {
  activeContent: ContentItem | null;
  setActiveContent: (content: ContentItem | null) => void;
  getContentById: (id: string) => ContentItem | null;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeContent, setActiveContent] = useState<ContentItem | null>(
    sampleContentTree["about"] // Default to about page
  );

  const getContentById = (id: string): ContentItem | null => {
    return getContent(id);
  };

  return (
    <ContentContext.Provider
      value={{
        activeContent,
        setActiveContent,
        getContentById
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
