import Image from 'next/image';
import type { PortfolioProject } from '../model';
import './project-card.scss';
import { useI18n } from '@/i18n/i18n';
import translations from './translations.json';
import projectTranslations from '../translations.json';

interface ProjectCardProps {
  project: PortfolioProject;
  onOpen: (project: PortfolioProject) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { translate } = useI18n();
  const projectPath = `projects.${project.id}`;
  const title = translate(projectTranslations, `${projectPath}.title`);

  return (
    <article
      className="project-card"
      onClick={() => onOpen(project)}
      aria-label={translate(translations, 'detailsLabel', { title })}
    >
      <div className="project-card__image">
        <Image
          src={project.image}
          alt={translate(translations, 'imageAlt', { title })}
          width={560}
          height={300}
          sizes="(max-width: 560px) calc(100vw - 48px), (max-width: 840px) 50vw, 33vw"
          quality={92}
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">
          {translate(projectTranslations, `${projectPath}.description`)}
        </p>
        <ul className="project-card__stack" aria-label={translate(translations, 'technologiesLabel')}>
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
