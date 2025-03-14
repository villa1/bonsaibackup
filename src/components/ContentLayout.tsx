
import React, { useState } from "react";
import ContentSidebar from "./ContentSidebar";
import ContentRenderer from "./ContentRenderer";
import ContentBreadcrumbs from "./ContentBreadcrumbs";
import { Menu, X } from "lucide-react";

const ContentLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center">
          <button
            className="p-1 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <h1 className="text-xl font-bold text-blue-600">Markdown Hierarchy</h1>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {isSidebarOpen && (
          <aside className="h-full">
            <ContentSidebar />
          </aside>
        )}
        
        <main className="flex flex-col flex-1 overflow-hidden">
          <ContentBreadcrumbs />
          <ContentRenderer />
        </main>
      </div>
    </div>
  );
};

export default ContentLayout;
