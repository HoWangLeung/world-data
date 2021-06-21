
import React, { useEffect, useState } from 'react';

import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';


const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();


export const Marks = ({
  data: { land, interiors },
}) => {

  return (
    <g className="worldMap_marks">
      <path className="sphere" d={path({ type: 'Sphere' })} />
      <path className="graticules" d={path(graticule())} />
      {land.features.map(feature => {

        console.log(feature);
        return <path className="land" d={path(feature)} />
      })}
      <path className="interiors" d={path(interiors)} />
 
    </g>





  )

}
