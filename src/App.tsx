import { useState } from 'react';

// Design Tokens extracted from the original website
interface DesignSystem {
  colors: {
    primary: string;
    secondary: string[];
    text: string[];
  };
  typography: {
    fontFamily: string;
    headingSizes: string[];
  };
  spacing: {
    containerPadding: string;
    sectionGap: string;
  };
}

const designSystem: DesignSystem = {
  colors: {
    primary: 'rgb(255, 255, 255)',
    secondary: [],
    text: [],
  },
  typography: {
    fontFamily: 'system-ui',
    headingSizes: [],
  },
  spacing: {
    containerPadding: '2rem',
    sectionGap: '3rem',
  },
};

// Component interfaces
interface NavProps {
  links: Array<{ text: string; href: string }>;
}

interface HeroProps {
  title: string;
  subtitle?: string;
}

interface ContentSectionProps {
  headings: Array<{ tag?: string; text: string }>;
  paragraphs: string[];
}

// Reusable Components
function Navigation({ links }: NavProps) {
  return (
    <nav style={{ 
      backgroundColor: designSystem.colors.primary,
      padding: '1rem 2rem',
      fontFamily: designSystem.typography.fontFamily
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">{"Interactive Browser Prototype"}</div>
        <div className="flex gap-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-white hover:opacity-80 transition-opacity"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero({ title, subtitle }: HeroProps) {
  return (
    <section style={{
      padding: `${designSystem.spacing.containerPadding} 2rem`,
      backgroundColor: '#f8fafc',
      fontFamily: designSystem.typography.fontFamily
    }}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 style={{ 
          fontSize: designSystem.typography.headingSizes[0] || '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: designSystem.colors.primary
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: '1.25rem',
            color: designSystem.colors.text[0] || '#64748b'
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

function ContentSection({ headings, paragraphs }: ContentSectionProps) {
  return (
    <section style={{ 
      padding: `${designSystem.spacing.containerPadding} 2rem`,
      fontFamily: designSystem.typography.fontFamily
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {headings.slice(0, 6).map((heading, idx) => (
            <div key={idx} className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: designSystem.colors.primary
              }}>
                {heading.text}
              </h3>
              {paragraphs[idx] && (
                <p style={{ 
                  color: designSystem.colors.text[0] || '#64748b',
                  lineHeight: '1.6'
                }}>
                  {paragraphs[idx]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      backgroundColor: designSystem.colors.primary,
      color: 'white',
      padding: '2rem',
      marginTop: 'auto',
      fontFamily: designSystem.typography.fontFamily
    }}>
      <div className="max-w-7xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Interactive Browser Prototype. Generated from scraped website.</p>
      </div>
    </footer>
  );
}

// Main Component
export default function GeneratedWebsite() {
  const [activeSection, setActiveSection] = useState(0);
  
  const navLinks = [];
  
  const headings = [];
  
  const paragraphs = ['https://link1.com', 'OKR 2023 - Rdbrck', 'Meme Websites', '10 days in Japan itinerary', 'Best itinerary for Japan in 10 days'];

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: designSystem.typography.fontFamily }}>
      
      
      <Hero 
        title="Interactive Browser Prototype"
        subtitle="https://link1.com"
      />
      
      <ContentSection 
        headings={headings}
        paragraphs={paragraphs}
      />
      
      <section style={{ padding: '3rem 2rem', backgroundColor: '#f1f5f9' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Design System</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Color Palette</h3>
              <div className="flex flex-wrap gap-2">
                {designSystem.colors.secondary.map((color, idx) => (
                  <div key={idx} className="text-center">
                    <div 
                      className="h-12 w-12 rounded-lg border shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                    <code className="text-xs mt-1 block">{color}</code>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Typography</h3>
              <p style={{ fontFamily: designSystem.typography.fontFamily }}>
                {designSystem.typography.fontFamily}
              </p>
              <div className="mt-2 space-y-1">
                {designSystem.typography.headingSizes.map((size, idx) => (
                  <div key={idx} className="text-sm text-gray-600">
                    Size {idx + 1}: {size}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Components</h3>
              <ul className="space-y-2">
                
                <li className="text-sm">
                  <span className="font-medium">Button:</span> 1 found
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
}