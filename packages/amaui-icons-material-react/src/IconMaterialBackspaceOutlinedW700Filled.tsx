import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceOutlinedW700Filled'
      short_name='Backspace'

      {...props}
    >
      <path d="M11.5 16.35 14.025 13.825 16.55 16.35 18.375 14.525 15.85 12 18.375 9.475 16.55 7.65 14.025 10.175 11.5 7.65 9.675 9.475 12.2 12 9.675 14.525ZM2.05 12 6.725 5.425Q7.15 4.8 7.825 4.475Q8.5 4.15 9.25 4.15H18.8Q20.1 4.15 21.025 5.075Q21.95 6 21.95 7.3V16.7Q21.95 18 21.025 18.925Q20.1 19.85 18.8 19.85H9.25Q8.5 19.85 7.825 19.513Q7.15 19.175 6.725 18.575Z"/>
    </Icon>
  )
});

export default IconMaterialBackspaceOutlinedW700Filled;
