
import React from "react";
import { useContent } from "@/contexts/ContentContext";
import { getContentPath } from "@/data/sampleContent";
import { ChevronRight, Home } from "lucide-react";

const ContentBreadcrumbs: React.FC = () => {
  const { activeContent, setActiveContent, getContentById } = useContent();
  
  if (!activeContent) return null;
  
  const path = getContentPath(activeContent.id);
  
  return (
    <div className="flex items-center text-sm text-gray-500 py-2 px-4 bg-gray-50 border-b">
      <div 
        className="flex items-center cursor-pointer hover:text-blue-500"
        onClick={() => {
          const rootContent = getContentById("root");
          if (rootContent) setActiveContent(rootContent);
        }}
      >
        <Home className="h-3.5 w-3.5 mr-1" />
        <span>Home</span>
      </div>
      
      {path.slice(1).map((item, index) => (
        <React.Fragment key={item.id}>
          <ChevronRight className="h-3 w-3 mx-1" />
          <div 
            className={`cursor-pointer hover:text-blue-500 ${
              index === path.length - 2 ? "font-medium text-gray-700" : ""
            }`}
            onClick={() => setActiveContent(item)}
          >
            {item.name}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ContentBreadcrumbs;
