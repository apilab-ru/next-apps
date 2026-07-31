import './menu.scss';

const items = [
  { label: 'Обо мне', path: 'intro' },
  { label: 'Навыки', path: 'skills' },
  { label: 'Опыт', path: 'experience' },
  { label: 'Проекты', path: 'projects' },
  { label: 'Контакты', path: 'contacts' },
];

export function Menu() {
  return (
    <div className="menu">
      <div className="menu__title">
        <img src="/img/logo-main.png" className="menu__logo" alt="logo" />
        APILAB
      </div>
      <div className="menu__links">
        {items.map((item) => (
          <a className="menu__link" href={'#' + item.path} key={item.path}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;
