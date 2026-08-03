'use client';

import { useEffect, useState } from 'react';
import { PORTFOLIO_PREVIEW_COUNT, PORTFOLIO_PROJECTS } from './model';
import type { PortfolioProject } from './model';
import ProjectCard from './project-card/project-card';
import ProjectModal from './project-modal/project-modal';
import './portfolio.scss';

const PROJECT_QUERY_PARAM = 'project';
const PROJECT_MODAL_HISTORY_KEY = 'portfolioProjectModal';

function getProjectFromUrl() {
  const projectId = new URL(window.location.href).searchParams.get(
    PROJECT_QUERY_PARAM,
  );

  return PORTFOLIO_PROJECTS.find((project) => project.id === projectId) ?? null;
}

export function Portfolio() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const previewProjects = PORTFOLIO_PROJECTS.slice(0, PORTFOLIO_PREVIEW_COUNT);
  const extraProjects = PORTFOLIO_PROJECTS.slice(PORTFOLIO_PREVIEW_COUNT);

  useEffect(() => {
    const syncProjectWithUrl = () => {
      setSelectedProject(getProjectFromUrl());
    };

    syncProjectWithUrl();
    window.addEventListener('popstate', syncProjectWithUrl);

    return () => {
      window.removeEventListener('popstate', syncProjectWithUrl);
    };
  }, []);

  const openProject = (project: PortfolioProject) => {
    const url = new URL(window.location.href);
    url.searchParams.set(PROJECT_QUERY_PARAM, project.id);

    window.history.pushState(
      {
        ...(window.history.state ?? {}),
        [PROJECT_MODAL_HISTORY_KEY]: true,
      },
      '',
      url,
    );

    setSelectedProject(getProjectFromUrl());
  };

  const closeProject = () => {
    const url = new URL(window.location.href);

    if (!url.searchParams.has(PROJECT_QUERY_PARAM)) {
      setSelectedProject(null);
      return;
    }

    if (window.history.state?.[PROJECT_MODAL_HISTORY_KEY]) {
      window.history.back();
      return;
    }

    url.searchParams.delete(PROJECT_QUERY_PARAM);
    const nextHistoryState = { ...(window.history.state ?? {}) };
    delete nextHistoryState[PROJECT_MODAL_HISTORY_KEY];
    window.history.replaceState(nextHistoryState, '', url);

    setSelectedProject(getProjectFromUrl());
  };

  return (
    <section className="portfolio" id="projects" data-scroll-section>
      <h2 className="section-title">Проекты</h2>
      <div className="portfolio__grid">
        {previewProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={openProject}
          />
        ))}
      </div>

      <div
        id="extra-projects"
        className={`portfolio__extra${isExpanded ? ' --expanded' : ''}`}
        aria-hidden={!isExpanded}
        inert={!isExpanded}
      >
        <div className="portfolio__extra-content">
          <div className="portfolio__grid">
            {extraProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={openProject}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        className="button portfolio__control"
        type="button"
        aria-expanded={isExpanded}
        aria-controls="extra-projects"
        onClick={() => setIsExpanded((value) => !value)}
      >
        {isExpanded ? 'Скрыть проекты' : 'Смотреть все проекты'}
      </button>
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </section>
  );
}

export default Portfolio;
