
export type ContentType = 'file' | 'folder';

export interface ContentItem {
  id: string;
  name: string;
  type: ContentType;
  parent: string | null;
  content?: string;
  children?: string[]; // Changed from ContentItem[] to string[] to store IDs
}

export interface ContentTree {
  [key: string]: ContentItem;
}
