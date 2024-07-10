import './explore.css'
import Nav from '../../components/Nav/Nav';
import Emprendimiento from '../../components/Emprendimiento/Emprendimiento';
import emprendimientos from '../../assets/emprendimientos/emprendimientos';
import { useState } from 'react';

function Explore(){
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = emprendimientos.slice(indexOfFirstItem, indexOfLastItem);

    function handlePrevPage(){
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handleNextPage(){
        if (currentPage < Math.ceil(emprendimientos.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    return(
        <div className ='explore'>
            <Nav/>
            <div className='emprendimientos'>
                {currentItems.map(emprendimiento => 
                <Emprendimiento key={emprendimiento.nombre}
                    nombre={emprendimiento.nombre} 
                    ciudad={emprendimiento.ciudad} 
                    usuario={emprendimiento.usuario}
                     descripcion={emprendimiento.descripcion} 
                     img={emprendimiento.img} 
                     calificacion={emprendimiento.calificacion}/>)}
            </div>
            <div className='pagination'>
                <button onClick={handlePrevPage} disabled={currentPage === 1}> &lt;-- </button>
                <span>Page {currentPage}</span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(emprendimientos.length / itemsPerPage)}>--&gt; </button>
            </div>
        </div>)
}

export default Explore;
