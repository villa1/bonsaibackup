
import React, { useState } from "react";
import { useContent } from "@/contexts/ContentContext";
import { ContentItem } from "@/types/content";
import { getChildren } from "@/data/sampleContent";
import { ChevronDown, ChevronRight, File, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentItemProps {
  item: ContentItem;
  level: number;
}

const ContentItemComponent: React.FC<ContentItemProps> = ({ item, level }) => {
  const { setActiveContent, activeContent } = useContent();
  const [isOpen, setIsOpen] = useState(level < 2);
  const children = getChildren(item.id);
  const hasChildren = children.length > 0;
  const isActive = activeContent?.id === item.id;

  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  const handleClick = () => {
    if (item.type === "file") {
      setActiveContent(item);
    } else {
      handleToggle();
    }
  };

  return (
    <div className="w-full">
      <div
        className={cn(
          "flex items-center py-1 px-2 cursor-pointer hover:bg-gray-100 rounded",
          isActive && "bg-blue-100 text-blue-700 font-medium"
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={handleClick}
      >
        <div className="mr-1">
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-500" />
            )
          ) : item.type === "file" ? (
            <File className="h-4 w-4 text-gray-500" />
          ) : (
            <Folder className="h-4 w-4 text-gray-500" />
          )}
        </div>
        <span className="truncate">{item.name}</span>
      </div>
      
      {isOpen && hasChildren && (
        <div className="w-full">
          {children.map((child) => (
            <ContentItemComponent
              key={child.id}
              item={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ContentSidebar: React.FC = () => {
  const rootItems = getChildren("root");

  return (
    <div className="w-64 h-full overflow-y-auto border-r p-2 bg-white">
      <div className="text-lg font-bold px-3 py-2 mb-2 border-b">
        Content Explorer
      </div>
      <div className="space-y-1">
        {rootItems.map((item) => (
          <ContentItemComponent key={item.id} item={item} level={0} />
        ))}
      </div>
    </div>
  );
};

export default ContentSidebar;
