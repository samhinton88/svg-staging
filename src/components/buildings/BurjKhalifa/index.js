import React from 'react';

export default ({renderedAtX, fill}) => {
  const baseX = renderedAtX || 500;
  console.log(fill)

  return (
    <g 
      className="burj-khalifa"
    >
           <rect x={baseX} y='0' height='330' width='10' fill={ fill || 'crimson'} />
           <rect x={baseX} y='0' height='300' width='15' fill={ fill || 'crimson'}/>
           <rect x={baseX} y='0' height='280' width='30' fill={ fill || 'blue'}/>
            <rect x={baseX - 10} y='0' height='180' width='50' fill={ fill || 'orange'}/>
            <rect x={baseX  + 5} y='0' height='150' width='50' fill={ fill || 'green'} {...fill}/>
            <rect x={baseX - 20} y='0' height='100' width='30' fill={ fill || 'red'} {...fill}/>           
    </g>
  )
}