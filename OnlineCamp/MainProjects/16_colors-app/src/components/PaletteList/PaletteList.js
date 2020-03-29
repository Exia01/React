import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPallette/MiniPalette';

const PaletteList = props => {
  const { palettes } = props;
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map(palette => {
        return (
          <p>
            {/* Spreading or "extracting" props in palette */}
            <MiniPalette {...palette} />
          </p>
        );
      })}
    </div>
  );
};

export default PaletteList;
