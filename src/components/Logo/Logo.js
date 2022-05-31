import logo from '../../images/logo.svg'

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="logo" className='logo-img'/>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo