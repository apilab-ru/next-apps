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

          {project.href && (
            <a
              className="button project-modal__link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              {translate(translations, 'openProject')}
            </a>
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
