import Logo from '../Logo/Logo'
import MenuOptions from '../MenuOptions/MenuOptions'
import HeaderIcons from '../HeaderIcons/HeaderIcons'

const Header = () => {
    return (
        <nav>
            <Logo />
            <MenuOptions />
            <HeaderIcons />
        </nav>
    )
}

export default Header