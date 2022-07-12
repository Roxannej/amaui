import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerOutlinedW100Filled'
      short_name='Scanner'

      {...props}
    >
      <path d="M18.1 13.3 5.25 8.65 5.45 8 18.25 12.65Q19.05 12.95 19.375 13.55Q19.7 14.15 19.7 14.8V17.2Q19.7 17.85 19.275 18.275Q18.85 18.7 18.2 18.7H5.8Q5.15 18.7 4.725 18.275Q4.3 17.85 4.3 17.2V14.8Q4.3 14.15 4.725 13.725Q5.15 13.3 5.8 13.3ZM10.2 16.35H17.35V15.65H10.2ZM7 16.7Q7.3 16.7 7.5 16.5Q7.7 16.3 7.7 16Q7.7 15.7 7.5 15.5Q7.3 15.3 7 15.3Q6.7 15.3 6.5 15.5Q6.3 15.7 6.3 16Q6.3 16.3 6.5 16.5Q6.7 16.7 7 16.7Z"/>
    </Icon>
  )
});

export default IconMaterialScannerOutlinedW100Filled;
