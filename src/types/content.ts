
export type ContentType = 'file' | 'folder';

export interface ContentItem {
  id: string;
  name: string;
  type: ContentType;
  parent: string | null;
  content?: string;
  children?: ContentItem[];
}

export interface ContentTree {
  [key: string]: ContentItem;
}
