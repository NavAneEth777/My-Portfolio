import {Link} from 'react-router-dom';
import '../static/styles.min.css';
function Header() {
    return (
        <>
            <nav class="navbar is-max-desktop has-shadow" role="navigation" aria-label="main navigation">
                <div class="navbar-menu is-active">
                    <a class="navbar-item" href="/"><h1>NavAneEth ⚡</h1></a>
                    <div style={{display: 'flex'}}>
                        <Link class="navbar-item" to="/about">About</Link>
                        <Link class="navbar-item" to="/projects">Projects</Link>
                        <Link class="navbar-item" to="/certificates">Certificates</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;