"use client";

import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTranslations } from "next-intl";
import slugify from 'slugify';
import RightSidebar from '../RightSidebar';
import LeftSidebar from '../LeftSidebar';
import ModalImage from '../ModalImage';
import Footer from '../Footer';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock';
import Head from 'next/head';
import BackToTop from '../BackToTop';

interface Task {
  id: number;
  title: string;
  description: string;
  lang: string;
}

// Add type for params
interface PageParams {
  locale?: string;
  page?: string;
}

const customSearchParam: Record<string, string> = {
  en: 'tasks',
  lv: 'uzdevumi',
  ee: "ulesanded",
};

async function loadTasks(lang = 'en'): Promise<Task[]> {
  try {
    const response = await fetch(`/tasks-${lang}.md`);
    if (!response.ok) throw new Error(`Failed to load tasks for ${lang}`);
    const tasks = await response.text();

    return tasks.split(/^# /m).slice(1).map((task, index) => ({
      id: index,
      title: task.split('\n')[0].trim(),
      description: task.split('\n').slice(1).join('\n'),
      lang
    }));
  } catch (error) {
    console.error(error);
    return lang !== 'en' ? loadTasks('en') : [];
  }
}

export default function TaskPage() {
  const t = useTranslations("TasksPage");
  const params = useParams() as PageParams;
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Use optional chaining and provide defaults
  const currentLang = params?.locale || 'en';
  const currentPage = params?.page || 'default';
  const currentPath = `/${currentLang}/${currentPage}/`;
  const searchParams = useSearchParams();

  useEffect(() => {
    const updateNavHeight = () => {
      const navbar = document.getElementById('main-navbar');
      if (navbar) {
        const height = navbar.offsetHeight;
        document.documentElement.style.setProperty('--nav-height', `${height}px`);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  useEffect(() => {
    loadTasks(currentLang).then(setTasks);
  }, [currentLang]);

  useEffect(() => {
    const paramKey = customSearchParam[currentLang as keyof typeof customSearchParam];
    if (!paramKey) return;

    const taskParam = searchParams?.get(paramKey);
    if (taskParam && tasks.length > 0) {
      const matchedTask = tasks.find((task) => slugify(task.title, {
        replacement: '-',
        remove: /[*+~.()'"!:@]/g,
        lower: true,
      }) === taskParam);
      setSelectedTask(matchedTask || null);
    }
  }, [searchParams, tasks, currentLang]);

  const handleImageClick = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const closeAllSidebars = () => {
    setLeftSidebarOpen(false);
    setRightSidebarOpen(false);
  };

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(prevState => {
      if (!prevState) setRightSidebarOpen(false);
      return !prevState;
    });
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(prevState => {
      if (!prevState) setLeftSidebarOpen(false);
      return !prevState;
    });
  };

  return (
    <>
      <Head>
        <title>{selectedTask ? selectedTask.title : 'Tasks'}</title>
        <meta
          name="description"
          content={selectedTask ? selectedTask.description : 'Browse and manage your tasks.'}
        />
        {selectedTask && (
          <meta
            property="og:image"
            content={`/images/tasks/${selectedTask.id}.jpg`}
          />
        )}
        <meta property="og:title" content={selectedTask ? selectedTask.title : 'Tasks'} />
        <meta
          property="og:description"
          content={selectedTask ? selectedTask.description : 'Browse and manage your tasks.'}
        />
      </Head>

      <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
        {(leftSidebarOpen || rightSidebarOpen) && (
          <div 
            className="fixed inset-0 bg-neutral-900 bg-opacity-50 z-30 lg:hidden"
            style={{ top: 'var(--nav-height)' }}
            onClick={closeAllSidebars}
          />
        )}

        <div className="flex flex-grow">
          {/* Left Sidebar */}
          <LeftSidebar
            tasks={tasks}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            isSidebarOpen={leftSidebarOpen}
            setIsSidebarOpen={toggleLeftSidebar}
            currentPath={currentPath}
          />

          {/* Main Content */}
          <div className="flex-grow border-x border-neutral-700">
            <div className="max-w-7xl mx-auto px-6">
              {selectedTask ? (
                <div className="py-8">
                  <h1 className="text-4xl font-bold mb-8">{selectedTask.title}</h1>
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown
                      components={{
                        code: ({ children, className }) => (
                          <CodeBlock className={className}>{String(children)}</CodeBlock>
                        ),
                        img: ({ src, alt }) => (
                          <img
                            src={src}
                            alt={alt}
                            onClick={() => src && handleImageClick(src)}
                            className="rounded-lg shadow-lg hover:opacity-90 cursor-pointer"
                            style={{ maxWidth: "100%", margin: "1rem auto" }}
                          />
                        )
                      }}
                    >
                      {selectedTask.description}
                    </ReactMarkdown>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-300 py-12">
                  {t("selectTask")}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <RightSidebar 
            tasks={tasks} 
            selectedTask={selectedTask}
            isSidebarOpen={rightSidebarOpen}
            setIsSidebarOpen={toggleRightSidebar}
          />
        </div>
        
        {modalImage && <ModalImage modalImage={modalImage} closeModal={closeModal} />}
        <BackToTop />
        <Footer />
      </div>
    </>
  );
}