import React from 'react';

import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

// passing the whole component itself to SortableContainer
const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: '100%' }}>
      {/* Passing the color obj as well as index */}
      {colors.map((color, idx) => {
        return (
          <DraggableColorBox
            // idx enables dragging
            index={idx}
            key={color.name}
            color={color.color}
            name={color.name}
            onDeleteClickHandler={removeColor}
          />
        );
      })}
    </div>
  )
})

export default DraggableColorList;
