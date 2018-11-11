import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => (
          <li className="menu__list-item" key={item.path}>
            <Link
              to={item.path}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.label}
            </Link>
            {(item.submenu.length > 0) ? (
              <ul>
                {item.submenu.map(item2 => (
                  <li className="menu__list-item" key={item2.path}>
                    <Link
                      to={item2.path}
                      className="menu__list-item-link"
                      activeClassName="menu__list-item-link menu__list-item-link--active"
                    >
                      {item2.label}
                    </Link>               
                  </li> 
                ))}
              </ul>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
