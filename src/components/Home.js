import '../static/styles.min.css';
import '../static/styles.scss';
function Home() {
    return(
        <>
            <main class="container is-max-desktop" style={{padding: 1 + 'rem'}}>
                <div class="columns">
                    <div class="column">
                        <img src="https://img.freepik.com/premium-photo/3d-render-cartoon-like-man-working-with-laptop_332133-4909.jpg" alt="Nav Headshot"/>
                    </div>
                    <div class="column is-flex is-flex-direction-column is-justify-content-flex-end">
                        <h3 class="title is-3">Namasthe!👋</h3>
                        <div>
                            <p>
                                I'm<strong> Navaneeth Alluri</strong>, a software engineer and a passionate learner. I have a strong
                                interest in <strong>software development</strong> and <strong>computer science</strong>.
                            </p>
                            <br/>
                            <p>
                                I love <strong>learning</strong>, <strong>collaborating</strong>, and building software that is <strong>strong</strong>, <strong>flexible</strong>, and can grow with future needs.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );

}
export default Home;