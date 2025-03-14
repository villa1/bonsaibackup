
import { ContentItem, ContentTree } from "../types/content";

// Sample hierarchical content structure
export const sampleContentTree: ContentTree = {
  "root": {
    id: "root",
    name: "Root",
    type: "folder",
    parent: null,
    children: ["docs", "blog", "about"]
  },
  "docs": {
    id: "docs",
    name: "Documentation",
    type: "folder",
    parent: "root",
    children: ["docs-getting-started", "docs-configuration", "docs-advanced"]
  },
  "docs-getting-started": {
    id: "docs-getting-started",
    name: "Getting Started",
    type: "file",
    parent: "docs",
    content: `# Getting Started

## Introduction

Welcome to our markdown-based content system. This is a simple example of how you can organize content in a hierarchical way using markdown files.

## Prerequisites

- Basic knowledge of markdown
- A modern web browser

## Installation

1. Clone the repository
2. Install dependencies with \`npm install\`
3. Start the development server with \`npm run dev\`

---

You can **format text** in *many ways* using Markdown:

- Create lists
- [Add links](https://example.com)
- And much more!

\`\`\`javascript
// Even add code blocks
function greeting() {
  return "Hello, world!";
}
\`\`\``
  },
  "docs-configuration": {
    id: "docs-configuration",
    name: "Configuration",
    type: "file",
    parent: "docs",
    content: `# Configuration

You can configure this system by editing the \`config.json\` file in the root directory.

## Available Options

| Option | Description | Default |
|--------|-------------|---------|
| theme | The theme to use | 'light' |
| sidebar | Whether to show the sidebar | true |
| maxDepth | Maximum depth for the sidebar | 3 |

## Example Configuration

\`\`\`json
{
  "theme": "dark",
  "sidebar": true,
  "maxDepth": 4
}
\`\`\``
  },
  "docs-advanced": {
    id: "docs-advanced",
    name: "Advanced Topics",
    type: "folder",
    parent: "docs",
    children: ["docs-advanced-customization", "docs-advanced-plugins"]
  },
  "docs-advanced-customization": {
    id: "docs-advanced-customization",
    name: "Customization",
    type: "file",
    parent: "docs-advanced",
    content: `# Advanced Customization

## Creating Custom Themes

You can create custom themes by adding a new file to the \`themes\` directory.

## Custom Plugins

Plugins can be added to extend the functionality of the system.

\`\`\`javascript
// Example plugin
export default {
  name: 'my-plugin',
  hooks: {
    afterRender: (content) => {
      console.log('Content rendered:', content);
    }
  }
}
\`\`\``
  },
  "docs-advanced-plugins": {
    id: "docs-advanced-plugins",
    name: "Plugins",
    type: "file",
    parent: "docs-advanced",
    content: `# Plugins

## Available Plugins

- **markdown-highlight**: Adds syntax highlighting to code blocks
- **toc-generator**: Automatically generates a table of contents
- **image-gallery**: Creates a gallery from images in the content

## Writing Your Own Plugin

To write your own plugin, create a new file in the \`plugins\` directory with the following structure:

\`\`\`javascript
export default {
  name: 'my-plugin',
  version: '1.0.0',
  hooks: {
    // Hook definitions here
  }
}
\`\`\``
  },
  "blog": {
    id: "blog",
    name: "Blog",
    type: "folder",
    parent: "root",
    children: ["blog-welcome", "blog-features"]
  },
  "blog-welcome": {
    id: "blog-welcome",
    name: "Welcome to Our Blog",
    type: "file",
    parent: "blog",
    content: `# Welcome to Our Blog

This is our first blog post. We're excited to share our journey with you!

> "The only way to do great work is to love what you do." - Steve Jobs

## What's Next?

We'll be sharing:
- Development updates
- Tips and tricks
- Community stories

Stay tuned!`
  },
  "blog-features": {
    id: "blog-features",
    name: "Upcoming Features",
    type: "file",
    parent: "blog",
    content: `# Upcoming Features

We're working on several exciting features:

1. **Dark Mode**: A toggle for those who prefer a darker interface
2. **Collaboration**: Real-time editing with multiple users
3. **Export Options**: Export your content to PDF, HTML, or other formats

## Timeline

| Feature | Expected Release |
|---------|-----------------|
| Dark Mode | Q1 2023 |
| Collaboration | Q2 2023 |
| Export Options | Q3 2023 |

We'd love to hear your feedback on these upcoming features!`
  },
  "about": {
    id: "about",
    name: "About",
    type: "file",
    parent: "root",
    content: `# About Our Project

This project is a simple example of how you can use markdown files to create a hierarchical content structure, similar to static site generators like Hugo.

## Team

Our team is passionate about creating tools that make content management easier:

- **Jane Doe** - Lead Developer
- **John Smith** - UX Designer
- **Alice Johnson** - Content Strategist

## Contact

Feel free to reach out to us at example@example.com or visit our [website](https://example.com).`
  }
};

// Helper function to get children of a content item
export const getChildren = (id: string): ContentItem[] => {
  const item = sampleContentTree[id];
  if (!item || !item.children) return [];
  
  return item.children.map(childId => sampleContentTree[childId]);
};

// Helper function to get the full path to a content item
export const getContentPath = (id: string): ContentItem[] => {
  const path: ContentItem[] = [];
  let currentId = id;
  
  while (currentId) {
    const item = sampleContentTree[currentId];
    if (!item) break;
    
    path.unshift(item);
    currentId = item.parent as string;
    if (!currentId) break; // Break if we've reached the root
  }
  
  return path;
};

// Helper to get content by id
export const getContent = (id: string): ContentItem | null => {
  return sampleContentTree[id] || null;
};
