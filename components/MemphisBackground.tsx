import React from 'react';

interface ShapeConfig {
  id: number;
  type: 'circle' | 'rectangle' | 'line';
  size: string; 
  color: string; 
  position: string; 
  rotation?: string; 
  opacity?: string; 
  animation?: string; 
}

const shapes: ShapeConfig[] = [
  { id: 1, type: 'circle', size: 'w-20 h-20 md:w-28 md:h-28', color: 'bg-pink-500', position: 'top-[10%] left-[5%] md:top-[15%] md:left-[10%]', opacity: 'opacity-10 md:opacity-15', animation: 'animate-pulse animation-delay-1000' },
  { id: 2, type: 'rectangle', size: 'w-24 h-12 md:w-32 md:h-16', color: 'bg-cyan-400', position: 'top-[20%] right-[10%] md:top-[25%] md:right-[15%]', rotation: '-rotate-[25deg]', opacity: 'opacity-10 md:opacity-15', animation: 'animate-pulse animation-delay-1500' },
  { id: 3, type: 'circle', size: 'w-12 h-12 md:w-16 md:h-16', color: 'bg-yellow-400', position: 'bottom-[15%] left-[20%] md:bottom-[20%] md:left-[25%]', opacity: 'opacity-5 md:opacity-10', animation: 'animate-pulse animation-delay-2000' },
  { id: 4, type: 'rectangle', size: 'w-16 h-32 md:w-20 md:h-40', color: 'bg-purple-600', position: 'bottom-[10%] right-[5%] md:bottom-[15%] md:right-[8%]', rotation: 'rotate-[15deg]', opacity: 'opacity-15 md:opacity-20', animation: 'animate-pulse animation-delay-2500' },
  { id: 5, type: 'line', size: 'w-32 h-1 md:w-48 md:h-1.5', color: 'bg-green-400', position: 'top-[50%] left-[15%] transform -translate-y-1/2', rotation: 'rotate-[30deg]', opacity: 'opacity-10 md:opacity-15', animation: 'animate-pulse animation-delay-3000'},
  { id: 6, type: 'circle', size: 'w-24 h-24 md:w-32 md:h-32', color: 'bg-orange-500', position: 'top-[60%] right-[30%] md:top-[55%] md:right-[35%]', opacity: 'opacity-5 md:opacity-10', animation: 'animate-pulse animation-delay-500' },
];

const customAnimationStyle = `
  .animation-delay-500 { animation-delay: 500ms; }
  .animation-delay-1000 { animation-delay: 1000ms; }
  .animation-delay-1500 { animation-delay: 1500ms; }
  .animation-delay-2000 { animation-delay: 2000ms; }
  .animation-delay-2500 { animation-delay: 2500ms; }
  .animation-delay-3000 { animation-delay: 3000ms; }
`;


const MemphisBackground: React.FC = () => {
  return (
    <>
      <style>{customAnimationStyle}</style>
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0"> {/* z-0 ensures it's behind other content */}
        {shapes.map(shape => (
          <div
            key={shape.id}
            className={`
              absolute
              ${shape.size}
              ${shape.color}
              ${shape.position}
              ${shape.rotation || ''}
              ${shape.opacity || 'opacity-20'} 
              ${shape.animation || ''}
              ${shape.type === 'circle' ? 'rounded-full' : ''}
              transition-all duration-1000 ease-in-out
            `}
            aria-hidden="true"
          />
        ))}
      </div>
    </>
  );
};

export default MemphisBackground;