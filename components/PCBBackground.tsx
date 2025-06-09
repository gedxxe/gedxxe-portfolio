import React from 'react';

const PCBBackground: React.FC = () => {
  // Define some paths for the PCB traces
  // d attributes are SVG path commands: M = moveto, L = lineto, Q = quadratic bezier
  const paths = [
    { id: 'p1', d: 'M100,50 L150,50 Q180,50 180,80 L180,120 Q180,150 150,150 L50,150 Q20,150 20,120 L20,80 Q20,50 50,50 Z', delay: '0s' },
    { id: 'p2', d: 'M250,100 L350,100 L350,200 L250,200 Z M300,100 L300,50 L400,50', delay: '1s' },
    { id: 'p3', d: 'M50,250 L150,350 L250,250 L150,150 Z', delay: '2s' },
    { id: 'p4', d: 'M400,300 Q450,350 400,400 L350,400 Q300,350 350,300 Z', delay: '0.5s' },
    { id: 'p5', d: 'M50,400 L100,450 L50,500 L0,450 Z', delay: '1.5s' },
    { id: 'p6', d: 'M450,50 L550,50 L500,100 Z', delay: '2.5s' },
    { id: 'p7', d: 'M200,400 L250,450 L300,400 L250,350Z', delay: '0.8s' },
    { id: 'p8', d: 'M30,180 L80,180 Q100,180 100,200 L100,250', delay: '1.2s'},
    { id: 'p9', d: 'M500,200 L500,300 L450,350 L450,250 Z', delay: '1.8s'},
    { id: 'p10', d: 'M250,500 L350,450 L450,500', delay: '0.2s'},
  ];

  const nodes = [
    { id: 'n1', cx: 150, cy: 50, delay: '0s' }, { id: 'n2', cx: 180, cy: 80, delay: '0.2s' },
    { id: 'n3', cx: 50, cy: 150, delay: '0.4s' }, { id: 'n4', cx: 20, cy: 80, delay: '0.6s' },
    { id: 'n5', cx: 350, cy: 100, delay: '0.8s' }, { id: 'n6', cx: 300, cy: 50, delay: '1s' },
    { id: 'n7', cx: 150, cy: 350, delay: '1.2s' }, { id: 'n8', cx: 400, cy: 300, delay: '1.4s' },
    { id: 'n9', cx: 100, cy: 450, delay: '1.6s' }, { id: 'n10', cx: 500, cy: 100, delay: '1.8s' },
    { id: 'n11', cx: 250, cy: 450, delay: '0.1s' }, { id: 'n12', cx: 80, cy: 180, delay: '0.3s' },
    { id: 'n13', cx: 100, cy: 250, delay: '0.5s' }, { id: 'n14', cx: 450, cy: 250, delay: '0.7s' },
    { id: 'n15', cx: 350, cy: 450, delay: '0.9s' },
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" className="opacity-15">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g stroke="rgba(0, 220, 255, 0.5)" strokeWidth="0.5" fill="none">
          {paths.map(path => (
            <path
              key={path.id}
              d={path.d}
              className="pcb-line"
              style={{ animationDelay: path.delay, animationDuration: `${10 + Math.random() * 5}s` }}
            />
          ))}
        </g>
        <g fill="rgba(0, 220, 255, 0.7)" filter="url(#glow)">
          {nodes.map(node => (
            <circle
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              r="1.5"
              className="animate-pulse-glow"
              style={{ animationDelay: `${parseFloat(node.delay) + Math.random()}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default PCBBackground;