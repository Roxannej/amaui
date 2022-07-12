import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarcodeOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeOutlinedW700Filled'
      short_name='Barcode'

      {...props}
    >
      <path d="M.225 4.5h2.15v14.95H.225Zm6.425 0h1.075v14.95H6.65Zm-3.225 0h2.15v14.95h-2.15Zm17.15 0h3.2v14.95h-3.2ZM9.85 4.5H12v14.95H9.85Zm7.5 0h1.075v14.95H17.35Zm-4.275 0h3.2v14.95h-3.2Z"/>
    </Icon>
  )
});

export default IconMaterialBarcodeOutlinedW700Filled;
