import React from'react';
import PropTypes from'prop-types';

const App=({codigo,sku,descripcion})=> 
    <div className="row">
        <div className='product card col align-self-center'>
        <div className="card-body">
                <h5 className="card-title">{codigo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{sku}</h6>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    </div>

App.prototype={
    codigo: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
}

export default App;