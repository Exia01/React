import React from 'react';

const PaletteFooter = props => {
  const { palette, emoji } = props;
  return (
    <footer className='Palette-footer'>
      {palette}
      <span className='emoji'>{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
