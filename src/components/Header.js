import './Header.css'

function Header () {
    return (
        <div className="header">
            <div className='info'>
                <div className="header-title">
                    My balance
                </div>
                <div className="price">
                    $921.48
                </div>
            </div>
            <img src='./logo.svg' alt="logo" />
        </div>
    )
}

export default Header