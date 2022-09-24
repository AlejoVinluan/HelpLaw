import './NavItem.css';

const NavItem = (props) => {
    return (
        <button className='nav-button'>{props.content}</button>
    )
}

export default NavItem;