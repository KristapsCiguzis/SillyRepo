"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import { CheckSquare, Edit } from "lucide-react";
import slugify from 'slugify';
import MarkdownEditor from './MarkdownEditor';

const customSearchParam = {
  en: 'tasks',
  lv: 'uzdevumi',
  ee: "ulesanded",
};

const LeftSidebar = ({ tasks, selectedTask, setSelectedTask, isSidebarOpen, setIsSidebarOpen, currentPath }) => {
  const t = useTranslations("TasksPage");
  const router = useRouter();
  const lang = currentPath.split('/')[1];
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const clickChangeUrl = (task) => {
    const taskTitle = task?.title || "";
    const taskTcarrier = slugify(taskTitle, {
      replacement: '-',       
      remove: /[*+~.()'"!:@]/g, 
      lower: true,             
    });
    setSelectedTask(task);
    const newUrl = `${currentPath}?${customSearchParam[lang]}=${taskTcarrier}`;
    router.push(newUrl, undefined, { shallow: true });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!selectedTask) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
      
      if (scrollPercentage > 0.9) {
        setCompletedTasks(prev => new Set([...prev, selectedTask.id]));
        const savedCompleted = JSON.parse(localStorage.getItem('completedTasks') || '[]');
        if (!savedCompleted.includes(selectedTask.id)) {
          localStorage.setItem('completedTasks', JSON.stringify([...savedCompleted, selectedTask.id]));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedTask]);

  useEffect(() => {
    const savedCompleted = JSON.parse(localStorage.getItem('completedTasks') || '[]');
    setCompletedTasks(new Set(savedCompleted));
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="fixed left-6 p-2 rounded-lg bg-neutral-900 lg:hidden z-50 transition-opacity duration-150 
          top-[calc(var(--nav-height)+1rem)]"
        style={{ opacity: isSidebarOpen ? 0 : 1 }}
      >
        <div className="h-6 w-6 text-white">☰</div>
      </button>

      {/* Editor Widget */}
      {isEditorOpen && (
        <div 
          className="fixed left-80 top-[calc(var(--nav-height)+2rem)] z-50 
            bg-[#141414] rounded-lg shadow-xl w-[600px] border border-neutral-700"
        >
          <div className="border-b border-neutral-700 p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Markdown Editor</h3>
            <button 
              onClick={() => setIsEditorOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <MarkdownEditor 
              initialValue={selectedTask?.description || ''} 
              onClose={() => setIsEditorOpen(false)}
            />
          </div>
        </div>
      )}

      <aside 
        className={`fixed inset-y-0 left-0 w-72 bg-[#141414] transform z-50 
          top-[var(--nav-height)] transition-transform duration-150 ease-in-out overflow-y-auto
          border-r border-neutral-700
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-white">{t("title")}</h2>
            <button
              onClick={() => setIsEditorOpen(true)}
              className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
              disabled={!selectedTask}
              title={!selectedTask ? "Select a task to edit" : "Edit task"}
            >
              <Edit className="h-5 w-5" />
            </button>
          </div>
          <nav className="space-y-1">
            {tasks.map((task, index) => {
              const isCompleted = completedTasks.has(task.id);
              return (
                <div
                  key={task.id}
                  onClick={() => {
                    clickChangeUrl(task);
                    setIsSidebarOpen(false);
                  }}
                  className={`group flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer 
                    transition-colors duration-150
                    ${selectedTask?.id === task.id 
                      ? 'text-blue-500' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <CheckSquare 
                    className={`h-4 w-4 flex-shrink-0
                      ${isCompleted 
                        ? 'text-green-500' 
                        : selectedTask?.id === task.id 
                          ? 'text-blue-500' 
                          : 'text-gray-400 group-hover:text-gray-300'
                      }`}
                  />
                  <span className="text-sm font-medium">
                    {t("task")} {index + 1}: {task.title}
                  </span>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;