
import React from "react";
import { useContent } from "@/contexts/ContentContext";
import ReactMarkdown from "react-markdown";
import { getChildren } from "@/data/sampleContent";
import { File, Folder } from "lucide-react";

const ContentRenderer: React.FC = () => {
  const { activeContent, setActiveContent } = useContent();
  
  if (!activeContent) {
    return (
      <div className="flex-1 p-6">
        <div className="text-center text-gray-500 mt-10">
          Select a content item from the sidebar to view it here.
        </div>
      </div>
    );
  }
  
  // If it's a folder, show its children
  if (activeContent.type === "folder") {
    const children = getChildren(activeContent.id);
    
    return (
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">{activeContent.name}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {children.map(child => (
            <div 
              key={child.id}
              className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setActiveContent(child)}
            >
              <div className="flex items-center mb-2">
                {child.type === "file" ? (
                  <File className="h-5 w-5 text-blue-500 mr-2" />
                ) : (
                  <Folder className="h-5 w-5 text-amber-500 mr-2" />
                )}
                <h3 className="font-medium">{child.name}</h3>
              </div>
              <p className="text-sm text-gray-500">
                {child.type === "folder" 
                  ? `${getChildren(child.id).length} items` 
                  : "Document"}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // If it's a file, render the markdown content
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="prose prose-blue max-w-3xl mx-auto">
        <ReactMarkdown>
          {activeContent.content || "No content available."}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ContentRenderer;
