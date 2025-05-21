import { NavLink, Outlet, useParams } from 'react-router-dom';

function TabContainer({ basePath, tabs }) {
  const { id } = useParams();
  return (
    <div>
      <nav className="tabs">
        {tabs.map(tab => (
          <NavLink key={tab.path} to={`${basePath}/${tab.path}`}>
            {tab.label}
          </NavLink>
        ))}
      </nav>
      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
}

export default TabContainer;