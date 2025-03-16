import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Layout, List, Newspaper, Copy, Book, Info } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InstructionsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-bonsai-beige/50 py-3">
        <div className="container-custom mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-bonsai-dark-green font-medium">Admin Instructions</span>
          </div>
        </div>
      </div>
      
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="ADMIN DOCUMENTATION"
          title="How to Add Content to Pages"
          description="Detailed instructions for adding and updating content across different page types in the Indo Cipanas Bonsai website."
        />
        
        <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
          <Tabs defaultValue="general" className="p-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <Info size={16} />
                <span className="hidden md:inline">General</span>
              </TabsTrigger>
              <TabsTrigger value="single" className="flex items-center gap-2">
                <FileText size={16} />
                <span className="hidden md:inline">Single Pages</span>
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <List size={16} />
                <span className="hidden md:inline">List Pages</span>
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <Newspaper size={16} />
                <span className="hidden md:inline">Blog</span>
              </TabsTrigger>
              <TabsTrigger value="custom" className="flex items-center gap-2">
                <Layout size={16} />
                <span className="hidden md:inline">Custom Pages</span>
              </TabsTrigger>
            </TabsList>
            
            {/* General Guidelines Tab */}
            <TabsContent value="general" className="mt-6 space-y-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-bonsai-dark-green">General Content Guidelines</h2>
                <p>When adding content to any page on the Indo Cipanas Bonsai website, follow these general guidelines:</p>
                
                <h3 className="text-xl font-semibold text-bonsai-olive mt-6">Layout Structure</h3>
                <ul>
                  <li><strong>Layout Components:</strong> Every page must use one of the layout wrapper components:
                    <ul>
                      <li><code>DefaultLayout</code> - For standard pages with standard header/footer</li>
                      <li><code>SingleLayout</code> - For single content pages with section information</li>
                      <li><code>ListLayout</code> - For pages that display collections of items</li>
                    </ul>
                  </li>
                  <li><strong>Container Class:</strong> Always wrap content in <code>container-custom mx-auto</code> for consistent spacing</li>
                  <li><strong>Section Titles:</strong> Use the <code>SectionTitle</code> component for page headers</li>
                  <li><strong>Breadcrumbs:</strong> Include breadcrumb navigation at the top of each page</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-bonsai-olive mt-6">Routing</h3>
                <p>All pages must be registered in <code>App.tsx</code> within the <code>Routes</code> component. Format:</p>
                <pre className="bg-gray-100 p-3 rounded-md">
                  <code>{'<Route path="/page-name" element={<LayoutComponent><PageComponent /></LayoutComponent>} />'}</code>
                </pre>
                
                <h3 className="text-xl font-semibold text-bonsai-olive mt-6">Styling Guidelines</h3>
                <ul>
                  <li>Use Tailwind utility classes for styling</li>
                  <li>Follow the site's color scheme (bonsai-dark-green, bonsai-olive, bonsai-beige, bonsai-wheat)</li>
                  <li>Ensure responsive design with appropriate breakpoints (sm, md, lg, xl)</li>
                  <li>Use consistent spacing (<code>py-12</code>, <code>my-6</code>, etc.)</li>
                </ul>
              </div>
            </TabsContent>
            
            {/* Single Pages Tab */}
            <TabsContent value="single" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="overview">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Single Page Overview</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">Single pages display standalone content like "About Us", "Privacy Policy", etc. These pages can be implemented in two ways:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li><strong>Using the <code>SinglePage</code> component</strong> - For content managed through the blog.ts system</li>
                      <li><strong>Creating custom components</strong> - For more sophisticated layouts</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="staticPages">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Method 1: Using the SinglePage Component</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="mb-4">The <code>SinglePage</code> component loads content from <code>utils/blog.ts</code> based on the provided slug.</p>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 1: Add page content to <code>staticPages</code> array</h4>
                    <p>Open <code>src/utils/blog.ts</code> and find the <code>staticPages</code> array inside the <code>fetchBlogPosts()</code> function.</p>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
// Find this array in src/utils/blog.ts
const staticPages = [
  { 
    slug: 'about', 
    title: 'About Us', 
    section: 'about' 
  },
  // Add your new page here
  { 
    slug: 'your-page-slug', 
    title: 'Your Page Title', 
    section: 'your-section' 
  },
];`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 2: Add the route in App.tsx</h4>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
<Route 
  path="/your-page-slug" 
  element={<SingleLayout section="your-section">
    <SinglePage slug="your-page-slug" />
  </SingleLayout>} 
/>`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 3: Add detailed content to the page</h4>
                    <p>In the <code>posts.push()</code> section of <code>fetchBlogPosts()</code>, find your page by slug and update the content:</p>
                    <pre className="bg-gray-100 p-3 rounded-md">
                      <code>{`
content: \`# Your Page Title
  
## Section One
This is the detailed content for section one of your page.
  
## Section Two
More detailed content with **formatting** options.
\`,`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="customComponent">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Method 2: Creating Custom Page Components</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="mb-4">For pages requiring more complex layouts, create a dedicated component:</p>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 1: Create a new page component file</h4>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
// src/pages/YourCustomPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const YourCustomPage = () => {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bonsai-beige/50 py-3">
        <div className="container-custom mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-bonsai-dark-green transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-bonsai-dark-green font-medium">Your Page Title</span>
          </div>
        </div>
      </div>
      
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="YOUR SUBTITLE"
          title="Your Page Title"
          description="Detailed description of your page content."
        />
        
        {/* Custom page content goes here */}
        <div className="mt-12">
          <p>Your content here...</p>
        </div>
      </div>
    </>
  );
};

export default YourCustomPage;`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 2: Add the route in App.tsx</h4>
                    <pre className="bg-gray-100 p-3 rounded-md">
                      <code>{`
<Route 
  path="/your-page-slug" 
  element={<DefaultLayout><YourCustomPage /></DefaultLayout>} 
/>`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="examples">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Examples of Single Pages</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>About Us</strong> - <code>/about</code> route using SinglePage</li>
                      <li><strong>Privacy Policy</strong> - <code>/privacy-policy</code> route using LegalPageTemplate</li>
                      <li><strong>Testimonials</strong> - <code>/testimonials</code> route using custom TestimonialsPage component</li>
                      <li><strong>Contact</strong> - <code>/contact</code> route using SinglePage</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            {/* List Pages Tab */}
            <TabsContent value="list" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="overview">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">List Page Overview</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">List pages display collections of items, such as services, products, or categories. They use the <code>ListLayout</code> wrapper and typically the <code>ListPage</code> component.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="listPage">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Using the ListPage Component</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="mb-4">The <code>ListPage</code> component is designed to display collections of items based on the section parameter.</p>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 1: Add the route in App.tsx</h4>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
<Route 
  path="/your-list-page" 
  element={<ListLayout section="your-section">
    <ListPage section="your-section" />
  </ListLayout>} 
/>`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 2: Customize section config in ListPage.tsx</h4>
                    <p>Open <code>src/pages/ListPage.tsx</code> and update the <code>sectionConfig</code> object:</p>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
const sectionConfig: Record<string, { title: string, subtitle: string, description: string }> = {
  services: {
    title: "Our Services",
    subtitle: "SERVICE CATALOG",
    description: "Description of services..."
  },
  // Add your new section
  "your-section": {
    title: "Your Section Title",
    subtitle: "YOUR SECTION SUBTITLE",
    description: "Your section description text..."
  }
};`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 3: Update renderSectionContent to handle your section</h4>
                    <p>In <code>ListPage.tsx</code>, modify the <code>renderSectionContent</code> function to handle your section:</p>
                    <pre className="bg-gray-100 p-3 rounded-md">
                      <code>{`
const renderSectionContent = () => {
  switch (section) {
    case 'services':
      return <Services />;
    // Add case for your section
    case 'your-section':
      return <YourSectionComponent />;
    default:
      return (
        <div className="container-custom mx-auto py-8">
          <p>Content for {section} section</p>
        </div>
      );
  }
};`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="customList">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Creating Custom List Components</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="mb-4">For complex list pages, create a custom component:</p>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 1: Create your list component</h4>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
// src/components/your-section/YourSectionList.tsx
import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const YourSectionList = () => {
  // Your items data
  const items = [
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    // Add more items
  ];

  return (
    <div className="py-12">
      <SectionTitle
        subtitle="YOUR SECTION"
        title="Your Section Title"
        description="Your section description."
      />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-bonsai-dark-green">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourSectionList;`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 2: Import your list component in ListPage.tsx</h4>
                    <p>Add your new component to the ListPage render function as mentioned in Step 3 of the previous section.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="listExamples">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Examples of List Pages</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Services</strong> - <code>/services</code> route using ListPage with Services component</li>
                      <li><strong>Services Catalog</strong> - <code>/services-catalog</code> route using a different view of services</li>
                      <li><strong>Blog</strong> - <code>/blog</code> route using ListPage with blog-specific components</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            {/* Blog Tab */}
            <TabsContent value="blog" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="blogOverview">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Blog System Overview</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">The blog system consists of:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Blog listing page</strong> - displays a list of blog posts</li>
                      <li><strong>Blog post pages</strong> - display individual blog post content</li>
                      <li><strong>Markdown files</strong> - store the actual content of blog posts</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="addBlogPost">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Adding a New Blog Post</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <h4 className="font-semibold text-bonsai-olive">Step 1: Create a markdown file</h4>
                    <p>Create a new file in <code>public/blog/</code> with a descriptive filename:</p>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
// public/blog/your-post-title.md
---
title: Your Blog Post Title
excerpt: A brief summary of your blog post
category: Category Name
author: Author Name
authorRole: Author Position
date: 2023-08-20
readTime: 5 min read
image: /placeholder.svg
featured: false
tags: [tag1, tag2, tag3]
---

# Your Blog Post Title

Introduction paragraph goes here...

## First Section Heading
Content for the first section...

## Second Section Heading
Content for the second section...

### Sub-section
More detailed information...

![Image description](/placeholder.svg)

> Blockquote or important note

* Bullet point 1
* Bullet point 2
* Bullet point 3

1. Numbered list item 1
2. Numbered list item 2
3. Numbered list item 3

[Link text](https://example.com)
`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 2: Add the file path to blogFiles array</h4>
                    <p>Open <code>src/utils/blog.ts</code> and add your new blog file to the <code>blogFiles</code> array:</p>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
const blogFiles = [
  '/blog/python-programming.md',
  '/blog/understanding-cites.md',
  '/blog/global-bonsai-trends.md',
  '/blog/your-post-title.md', // Add your new blog file
];`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 3: Setting a post as featured (optional)</h4>
                    <p>To make a post appear as featured on the blog listing page, set <code>featured: true</code> in the frontmatter.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="frontmatter">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Blog Post Frontmatter Fields</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">The following fields can be used in the frontmatter section:</p>
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">title</td>
                          <td className="border border-gray-300 px-4 py-2">Title of the blog post</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">excerpt</td>
                          <td className="border border-gray-300 px-4 py-2">Brief summary shown in listings</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">category</td>
                          <td className="border border-gray-300 px-4 py-2">Category for filtering</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">author</td>
                          <td className="border border-gray-300 px-4 py-2">Post author's name</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">authorRole</td>
                          <td className="border border-gray-300 px-4 py-2">Author's position or role</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">date</td>
                          <td className="border border-gray-300 px-4 py-2">Publication date (YYYY-MM-DD)</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">readTime</td>
                          <td className="border border-gray-300 px-4 py-2">Estimated reading time</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">image</td>
                          <td className="border border-gray-300 px-4 py-2">Featured image path</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">featured</td>
                          <td className="border border-gray-300 px-4 py-2">Whether post is featured (true/false)</td>
                          <td className="border border-gray-300 px-4 py-2">No</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">tags</td>
                          <td className="border border-gray-300 px-4 py-2">Array of related tags</td>
                          <td className="border border-gray-300 px-4 py-2">No</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="markdownGuide">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Markdown Syntax Guide</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">Blog content uses Markdown syntax for formatting:</p>
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Element</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Markdown Syntax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Heading 1</td>
                          <td className="border border-gray-300 px-4 py-2"><code># Heading 1</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Heading 2</td>
                          <td className="border border-gray-300 px-4 py-2"><code>## Heading 2</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Heading 3</td>
                          <td className="border border-gray-300 px-4 py-2"><code>### Heading 3</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Bold</td>
                          <td className="border border-gray-300 px-4 py-2"><code>**bold text**</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Italic</td>
                          <td className="border border-gray-300 px-4 py-2"><code>*italicized text*</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Blockquote</td>
                          <td className="border border-gray-300 px-4 py-2"><code>> blockquote text</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Ordered List</td>
                          <td className="border border-gray-300 px-4 py-2"><code>1. First item<br/>2. Second item</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Unordered List</td>
                          <td className="border border-gray-300 px-4 py-2"><code>- First item<br/>- Second item</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Link</td>
                          <td className="border border-gray-300 px-4 py-2"><code>[link text](url)</code></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Image</td>
                          <td className="border border-gray-300 px-4 py-2"><code>![alt text](image-url)</code></td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            {/* Custom Pages Tab */}
            <TabsContent value="custom" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="customOverview">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Custom Page Overview</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">Custom pages have specialized layouts and functionality, such as Testimonials, Reviews, or specialized landing pages.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="createCustom">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Creating a Custom Page</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <h4 className="font-semibold text-bonsai-olive">Step 1: Create the page component</h4>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
// src/pages/YourCustomPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const YourCustomPage = () => {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bonsai-beige/50 py-3">
        <div className="container-custom mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-bonsai-dark-green transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-bonsai-dark-green font-medium">
              Your Custom Page
            </span>
          </div>
        </div>
      </div>
      
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="YOUR SUBTITLE"
          title="Your Custom Page Title"
          description="Description for your custom page."
        />
        
        {/* Custom content sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-bonsai-dark-green mb-4">
              First Section
            </h3>
            <p className="text-gray-600">
              Content for your first section...
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-bonsai-dark-green mb-4">
              Second Section
            </h3>
            <p className="text-gray-600">
              Content for your second section...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourCustomPage;`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 2: Add the route in App.tsx</h4>
                    <pre className="bg-gray-100 p-3 rounded-md">
                      <code>{`
<Route 
  path="/your-custom-page" 
  element={<DefaultLayout><YourCustomPage /></DefaultLayout>} 
/>`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="customComponents">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Creating Reusable Components</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="mb-4">For complex custom pages, create reusable components:</p>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 1: Create component files</h4>
                    <pre className="bg-gray-100 p-3 rounded-md mb-4">
                      <code>{`
// src/components/your-feature/YourFeatureCard.tsx
import React from 'react';

interface YourFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const YourFeatureCard: React.FC<YourFeatureCardProps> = ({ 
  title, 
  description, 
  icon 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4 text-bonsai-olive">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-bonsai-dark-green mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default YourFeatureCard;`}</code>
                    </pre>
                    
                    <h4 className="font-semibold text-bonsai-olive">Step 2: Use components in your page</h4>
                    <pre className="bg-gray-100 p-3 rounded-md">
                      <code>{`
// In your custom page file
import { Star, Heart, Award } from 'lucide-react';
import YourFeatureCard from '../components/your-feature/YourFeatureCard';

// Inside your component's return statement
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  <YourFeatureCard
    title="Feature One"
    description="Description of the first feature"
    icon={<Star size={24} />}
  />
  <YourFeatureCard
    title="Feature Two"
    description="Description of the second feature"
    icon={<Heart size={24} />}
  />
  <YourFeatureCard
    title="Feature Three"
    description="Description of the third feature"
    icon={<Award size={24} />}
  />
</div>`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="customExamples">
                  <AccordionTrigger className="text-xl font-semibold text-bonsai-dark-green">Examples of Custom Pages</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Testimonials</strong> - <code>/testimonials</code> with customer testimonials and additional content</li>
                      <li><strong>Reviews</strong> - <code>/reviews</code> showing customer reviews in a different format</li>
                      <li><strong>Legal Pages</strong> - Pages using LegalPageTemplate with structured content sections</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
