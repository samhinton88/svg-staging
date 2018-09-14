import React from 'react';

export default ({renderedAtX}) => {
  const baseX = renderedAtX || 500;

  return (
    <g className="burj-khalifa">
           <rect x={baseX} y='350' height='150' width='50' fill='black'/>
            <rect x={baseX + 10} y='300' height='200' width='60' fill='black'/>
            <rect x={baseX + 20} y='350' height='150' width='50' fill='black'/>
            <rect x={baseX + 30} y='280' height='150' width='30' fill='black'/>           
    </g>
  )
}