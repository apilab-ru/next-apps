import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { formatDate } from '@/helpers/formatDate';
import type { PortfolioProject } from '../model';
import './project-modal.scss';
import { useI18n } from '@/i18n/i18n';
import translations from './translations.json';
import projectTranslations from '../translations.json';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

function ExternalLinkIcon() {
  return (
    <svg className="project-modal__external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M14 4h6v6M20 4 10 14M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
    </svg>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, translate } = useI18n();
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
            aria-label={translate(translations, 'closeLabel')}
            autoFocus
          >
            ×
          </button>

          <h2 className="project-modal__title">
            {translate(
              projectTranslations,
              `projects.${project.id}.title`,
            )}
          </h2>
          <dl className="project-modal__meta">
            <div>
              <dt>{translate(translations, 'stackLabel')}</dt>
              <dd>{project.stack.join(', ')}</dd>
            </div>
            <div>
              <dt>{translate(translations, 'dateLabel')}</dt>
              <dd>
                <time dateTime={project.date}>
                  {formatDate(project.date, language)}
                </time>
              </dd>
            </div>
          </dl>

          {(project.href || project.githubHref || project.swaggerHref) && (
            <div className="project-modal__links">
              {project.href && (
                <a
                  className="project-modal__link project-modal__link--primary"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project-modal__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="9" />
                    <ellipse cx="12" cy="12" rx="4" ry="9" />
                    <path d="M3 12h18" />
                  </svg>
                  <span>{translate(translations, 'openProject')}</span>
                  <ExternalLinkIcon />
                </a>
              )}
              {project.githubHref && (
                <a
                  className="project-modal__link"
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-modal__link-icon icon-github" aria-hidden="true" />
                  <span>{translate(translations, 'openGithub')}</span>
                  <ExternalLinkIcon />
                </a>
              )}
              {project.swaggerHref && (
                <a
                  className="project-modal__link project-modal__link--swagger"
                  href={project.swaggerHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project-modal__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 6H8a1 1 0 0 0-1 1v3l-2 2 2 2v3a1 1 0 0 0 1 1h1M15 6h1a1 1 0 0 1 1 1v3l2 2-2 2v3a1 1 0 0 1-1 1h-1" />
                    <path d="M10 12h.01M12 12h.01M14 12h.01" strokeWidth="2.4" />
                  </svg>
                  <span>{translate(translations, 'openSwagger')}</span>
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          )}

          <div className="project-modal__details">
            {project.details.map((detail, index) => {
              const detailText = translate(
                projectTranslations,
                `projects.${project.id}.details.${index}.text`,
              );
              const hasDetailText = detailText !==
                `projects.${project.id}.details.${index}.text`;

              return (
              <section
                className="project-modal__detail"
                key={`${project.id}-${index}`}
              >
                {hasDetailText && <p>{detailText}</p>}
                {detail.image && (
                  <Image
                    className="project-modal__image"
                    src={detail.image}
                    alt={
                      hasDetailText
                        ? detailText
                        : translate(translations, 'screenshotAlt', {
                            title: translate(
                              projectTranslations,
                              `projects.${project.id}.title`,
                            ),
                          })
                    }
                    width={1200}
                    height={760}
                    sizes="(max-width: 860px) calc(100vw - 48px), 760px"
                    quality={94}
                  />
                )}
              </section>
              );
            })}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default ProjectModal;
