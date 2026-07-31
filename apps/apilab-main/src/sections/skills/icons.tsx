import { JSX, SVGProps } from 'react';
import AngularLogo from '../../../public/img/skills/angular.svg';
import NextdotjsLogo from '../../../public/img/skills/nextdotjs.svg';
import ReactLogo from '../../../public/img/skills/react.svg';
import TypescriptLogo from '../../../public/img/skills/typescript.svg';
import JavascriptLogo from '../../../public/img/skills/javascript.svg';
import Html5Logo from '../../../public/img/skills/html5.svg';
import CssLogo from '../../../public/img/skills/css.svg';
import NodedotjsLogo from '../../../public/img/skills/nodedotjs.svg';
import DockerLogo from '../../../public/img/skills/docker.svg';
import GitLogo from '../../../public/img/skills/git.svg';
import EslintLogo from '../../../public/img/skills/eslint.svg';
import JestLogo from '../../../public/img/skills/jest.svg';
import NgrxLogo from '../../../public/img/skills/ngrx.svg';
import NpmLogo from '../../../public/img/skills/npm.svg';
import NxLogo from '../../../public/img/skills/nx.svg';
import PrettierLogo from '../../../public/img/skills/prettier.svg';
import ReactivexLogo from '../../../public/img/skills/reactivex.svg';
import WebpackLogo from '../../../public/img/skills/webpack.svg';

type IconProps = SVGProps<SVGSVGElement>;

const icons: Record<string, (props: IconProps) => JSX.Element> = {
  angular: (props: IconProps) => <AngularLogo {...props} />,
  nextdotjs: (props: IconProps) => <NextdotjsLogo {...props} />,
  react: (props: IconProps) => <ReactLogo {...props} />,
  typescript: (props: IconProps) => <TypescriptLogo {...props} />,
  javascript: (props: IconProps) => <JavascriptLogo {...props} />,
  html5: (props: IconProps) => <Html5Logo {...props} />,
  css: (props: IconProps) => <CssLogo {...props} />,
  nodejs: (props: IconProps) => <NodedotjsLogo {...props} />,
  docker: (props: IconProps) => <DockerLogo {...props} />,
  git: (props: IconProps) => <GitLogo {...props} />,
  eslint: (props: IconProps) => <EslintLogo {...props} />,
  jest: (props: IconProps) => <JestLogo {...props} />,
  ngrx: (props: IconProps) => <NgrxLogo {...props} />,
  npm: (props: IconProps) => <NpmLogo {...props} />,
  nx: (props: IconProps) => <NxLogo {...props} />,
  prettier: (props: IconProps) => <PrettierLogo {...props} />,
  reactivex: (props: IconProps) => <ReactivexLogo {...props} />,
  webpack: (props: IconProps) => <WebpackLogo {...props} />,
};

export function SkillIcon({ name, ...props }: { name: string } & IconProps) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
