import './emprendimiento.css';
import Calificacion from '../Calificacion/Calificacion';

function Emprendimiento(props){

    return(
        <div className='emprendimiento-container'>
            <p className='nombre-emprendimiento'>{props.nombre}</p>
            <div className='usuario-y-ciudad'>
                <p className='usuario-emprendimiento'>{props.usuario}</p>
                <p className='ciudad-emprendimiento'>{props.ciudad}</p>
            </div>
            <img src={props.img} alt="imagen del emprendimiento"/>
            <div className='descripcion-y-rating'>
                <p className='descripcion-emprendimiento'>{props.descripcion}</p>
                <div className='calificacion-y-mas'>
                    <Calificacion rating={props.calificacion}/>
                    <p className='more-vista'>MORE</p>
                </div>
            </div>
        </div>
    )
}

export default Emprendimiento;