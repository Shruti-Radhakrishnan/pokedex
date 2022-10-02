import React from "react";

const PokeStats = ({ stats, types }) => {
  return (
    <div className="container-bar mt-0">
      <h4 className="w-100 mb-4 section-title">Stats</h4>
      {stats.map((item, index) => {
        return (
          
          <div key={index} className="bar-item">
            <div className='d-flex mb-4'>
             <p className="mb-0 label limit-text">
              {item.stat.name}
            </p>
            <div className="bar column">
              <div
                style={{ width: item.base_stat }}
                className="bar-active">
                <p className="value">{item.base_stat}</p>
              </div>
              </div>
            </div>
           
          </div>
        );
      })}
    </div>
  );
};

export default PokeStats;
