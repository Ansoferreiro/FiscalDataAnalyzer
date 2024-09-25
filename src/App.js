import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [file, setFile] = useState(null);
    const [totalValue, setTotalValue] = useState(0);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post('http://127.0.0.1:5000/upload', formData);
        setTotalValue(response.data.total_value);
    };

    return (
        <div>
            <h1>Análise de Nota Fiscal</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Enviar</button>
            </form>
            <h2>Total: {totalValue}</h2>
        </div>
    );
}

export default App;

