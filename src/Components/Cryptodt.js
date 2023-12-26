import React from 'react';
import DataTable from './Datatbl';
import jsonData from './data.json';

const Cryptodata = () => {
  return (
    <div className="cryptodata">
      <DataTable data={jsonData} />
    </div>
  );
}

export default Cryptodata;