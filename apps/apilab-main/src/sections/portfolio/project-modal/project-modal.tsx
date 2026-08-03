import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { formatDate } from '@/helpers/formatDate';
import type { PortfolioProject } from '../model';
import './project-modal.scss';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="project-modal__content">
          <button
            className="project-modal__close"
            type="button"
            onClick={onClose}
            aria-label="Закрыть окно"
            autoFocus
          >
            ×
          </button>

          <h2 className="project-modal__title">{project.title}</h2>
          <dl className="project-modal__meta">
            <div>
              <dt>Стек</dt>
              <dd>{project.stack.join(', ')}</dd>
            </div>
            <div>
              <dt>Дата</dt>
              <dd>
                <time dateTime={project.date}>{formatDate(project.date)}</time>
              </dd>
            </div>
          </dl>

          {project.href && (
            <a
              className="button project-modal__link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              Открыть проект ↗
            </a>
          )}

          <div className="project-modal__details">
            {project.details.map((detail, index) => (
              <section
                className="project-modal__detail"
                key={`${project.id}-${index}`}
              >
                {detail.text && <p>{detail.text}</p>}
                {detail.image && (
                  <Image
                    className="project-modal__image"
                    src={detail.image}
                    alt={detail.text || `Скриншот проекта «${project.title}»`}
                    width={1200}
                    height={760}
                    sizes="(max-width: 860px) calc(100vw - 48px), 760px"
                    quality={94}
                  />
                )}
              </section>
            ))}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default ProjectModal;
