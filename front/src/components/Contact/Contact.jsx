import './contact.css'
import img from '../../assets/contact-img.png'
import location from '../../assets/location.png'
import email from '../../assets/email-icon.png'
import github from '../../assets/github-icon.png'

function Contact(){
    return(<div className='contacto'>

        <img src={img} alt='contact-img' className='img-contact'/>

        <div className='info-contact'>
            <p className='titulo-contact'>GET IN <span className='amarillo'>TOUCH</span></p>
            <hr style={{color: 'white'}}/>

            <p className='parrafo-contact'>Have questions about investing or launching a project? 
                We're here to help! Get in touch with us today.</p>
            <div className='ayudaa'>
            <div className='descripcion-contact'>
                <div className='fila-descripcion'>
                    <p className='titulo-descripcion'>City</p>
                    <p className='subtitulo-descripcion'>Medellin, Colombia</p>
                </div>
                <img src={location} alt='location'/>
            </div>
            <div className='descripcion-contact'>               
                <div className='fila-descripcion'>
                    <p className='titulo-descripcion'>Email</p>
                    <p className='subtitulo-descripcion'>softwareashen@gmail.com</p>
                </div>
                <img src={email} alt='email'/>
            </div>
            <div className='descripcion-contact'>    
                <div className='fila-descripcion'>
                    <p className='titulo-descripcion'>Github</p>
                    <p className='subtitulo-descripcion'>github.com/ashensoftware</p>
                </div>
                <img src={github} alt='github'/>
            </div>
            </div>
        </div>

    </div>)
}

export default Contact;
