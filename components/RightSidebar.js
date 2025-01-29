"use client";

import React, { useState, useEffect } from 'react';
import { FileDown, ChevronRight } from 'lucide-react';
import { useTranslations } from "next-intl";
import taskDocs from '@/public/taskDocs.json';

const RightSidebar = ({ tasks, selectedTask, isSidebarOpen, setIsSidebarOpen }) => {
  const t = useTranslations("TasksPage");
  const [headlines, setHeadlines] = useState([]);
  const [activeSection, setActiveSection] = useState('');

  const handleDownload = (fileName) => {
    const url = `/docs/${fileName}`;
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  useEffect(() => {
    if (selectedTask) {
      const headlineMatches = selectedTask.description.match(/^##\s+(.+)$/gm) || [];
      const uniqueHeadlines = [...new Set(headlineMatches)].map((headline, index) => ({
        id: index,
        text: headline.replace('## ', '').replace(/\*\*/g, ''),
      }));
      setHeadlines(uniqueHeadlines);
    } else {
      setHeadlines([]);
    }
  }, [selectedTask]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.textContent?.trim() || '');
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px'
      }
    );

    const headings = document.getElementsByTagName('h2');
    Array.from(headings).forEach((heading) => observer.observe(heading));

    return () => {
      Array.from(headings).forEach((heading) => observer.unobserve(heading));
    };
  }, [selectedTask]);

  const scrollToHeadline = (headlineText) => {
    const cleanHeadlineText = headlineText.trim();
    const elements = document.getElementsByTagName('h2');
    for (let element of elements) {
      const elementText = element.textContent?.trim().replace(/\*\*/g, '') || '';
      if (elementText === cleanHeadlineText) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementPosition - 80),
          behavior: 'smooth'
        });
        setIsSidebarOpen(false);
        break;
      }
    }
  };

  if (!selectedTask) return null;

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed right-6 p-2 rounded-lg bg-neutral-900 lg:hidden z-50 transition-opacity duration-150
          top-[calc(var(--nav-height)+1rem)]"
        style={{ opacity: isSidebarOpen ? 0 : 1 }}
      >
        <div className="h-6 w-6 text-white">☰</div>
      </button>

      <aside
        className={`fixed inset-y-0 right-0 w-72 bg-[#141414] transform z-50 
          top-[var(--nav-height)] transition-transform duration-150 ease-in-out overflow-y-auto
          border-l border-neutral-700
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} 
          lg:translate-x-0`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-white">{t("contents")}</h3>
          </div>
          <div className="mb-6">
            {headlines.length > 0 ? (
              <nav className="space-y-1">
                {headlines.map((headline) => (
                  <div
                    key={headline.id}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer transition-colors duration-150
                      ${activeSection === headline.text
                        ? 'text-blue-500 bg-white/5'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                    onClick={() => scrollToHeadline(headline.text)}
                  >
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{headline.text}</span>
                  </div>
                ))}
              </nav>
            ) : (
              <p className="text-gray-300 text-sm px-3">{t("noSectionsAvailable")}</p>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">{t("resources")}</h3>
            <button
              onClick={() => {
                const doc = taskDocs.docs.find(doc => doc.taskId === selectedTask.id);
                if (doc) {
                  handleDownload(doc.fileName);
                }
              }}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg w-full text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-150"
            >
              <FileDown className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">{t("downloadTaskDocument")}</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RightSidebar;