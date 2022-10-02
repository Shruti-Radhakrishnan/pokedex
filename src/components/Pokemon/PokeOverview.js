import React, { useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
const PokeOverview = ({
  flavor_text_default,
}) => {
  return (
    <div className="">
        <ReactReadMoreReadLess
        
        charLimit={200}
        readMoreText={"Read more"}
        readLessText={"Read less"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
        >
        {flavor_text_default}
        </ReactReadMoreReadLess>
        </div>
  );

};

export default PokeOverview;
