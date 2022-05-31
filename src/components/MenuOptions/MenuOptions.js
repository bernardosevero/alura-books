import { menuOptionsData } from './MenuOptionsData'

const MenuOptions = () => {
    return (
        <ul className='flex options'>
                { menuOptionsData.map( option => (
                        <li className={option.class}>
                            <p>{option.text}</p>
                        </li>
                ) ) }
        </ul>
    )
}

export default MenuOptions