import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { showoff } from '../../lib/projects'

function Showoff(props) {
    const { toggleModal } = props
   
    return (
        <section className="flex-row justify-center vw100 mb-5">
            <div className="w75 bg-dark section-container">
                <h2 className="text-center mb-2">Personal<span className="text-primary">Favorites</span></h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry>
                        {showoff.map(project => (
                            <img 
                                key={project.id}
                                src={project.image}
                                alt={project.text}
                                onClick={() => toggleModal(project)}
                                className="px-1 py-1 w100" />
                        ))} 
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    );
};

export default Showoff;