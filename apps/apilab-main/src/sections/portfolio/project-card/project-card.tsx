import Image from 'next/image';
import type { PortfolioProject } from '../model';
import './project-card.scss';

interface ProjectCardProps {
  project: PortfolioProject;
  onOpen: (project: PortfolioProject) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      className="project-card"
      onClick={() => onOpen(project)}
      aria-label={`Подробнее о проекте «${project.title}»`}
    >
      <div className="project-card__image">
        <Image
          src={project.image}
          alt={`Интерфейс проекта «${project.title}»`}
          width={560}
          height={300}
          sizes="(max-width: 560px) calc(100vw - 48px), (max-width: 840px) 50vw, 33vw"
          quality={92}
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__stack" aria-label="Технологии">
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
