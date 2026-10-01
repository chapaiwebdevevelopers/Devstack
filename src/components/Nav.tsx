
import Logo from '../assets/logo-text.png'
const Nav = () => {
    
    return (
        <div className='grid grid-cols-2 container mx-auto py-5 px-10 bg-amber-300'>
            <img src={Logo} alt="" />
            <nav className='flex justify-between'>
                <ul className='flex gap-5'>
                    <li><a href="">home</a></li>
                    <li><a href="">Techonology</a></li>
                    <li><a href="">Project </a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="account space-x-4 ">
                    <a href="">Sign in</a>
                    <button className="btn btn-primary">Sign up</button>
                    
                </div>
            </nav>
        </div>
    );
};

export default Nav;