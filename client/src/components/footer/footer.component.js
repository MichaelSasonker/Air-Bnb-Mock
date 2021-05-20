import './footer.component.css';

const FooterComp = () => {

    return (
        <div className='footer-cont'>
            <div className='links'>
                <a className='git' href='https://github.com/MichaelSasonker' target='_blank'>
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a className='linkedin' href='https://www.linkedin.com/in/michael-sasonker-0346bb64/' target='_blank'>
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default FooterComp;