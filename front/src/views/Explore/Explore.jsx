import './explore.css'
import Nav from '../../components/Nav/Nav';
import Emprendimiento from '../../components/Emprendimiento/Emprendimiento';
import emprendimientos from '../../assets/emprendimientos/emprendimientos';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';

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
        <>
        
        
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
                    <p onClick={handlePrevPage} disabled={currentPage === 1}> &lt;-- </p>
                    <span>Page {currentPage}</span>
                    <p onClick={handleNextPage} disabled={currentPage === Math.ceil(emprendimientos.length / itemsPerPage)}>--&gt; </p>
                </div>
                <Footer/>
            </div>
        
        </>)
}

export default Explore;
