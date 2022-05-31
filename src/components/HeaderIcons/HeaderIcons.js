import './style.css'
import { headerIcons } from './IconsData'

const HeaderIcons = () => {
    return (
        <ul className='icons'>
                { headerIcons.map( icon => (
                    <li className={icon.class}>
                        <img
                            alt={icon.alt}
                            src={icon.src}
                        />
                    </li>
                )) }
        </ul>
    )
}

export default HeaderIcons