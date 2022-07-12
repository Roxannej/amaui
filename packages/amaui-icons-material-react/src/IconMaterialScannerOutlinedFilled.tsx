import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerOutlinedFilled'
      short_name='Scanner'

      {...props}
    >
      <path d="M17.6 12 3.5 6.9 4.2 5 19.8 10.7Q20.3 10.9 20.65 11.4Q21 11.9 21 12.5V18Q21 18.825 20.413 19.413Q19.825 20 19 20H5Q4.175 20 3.587 19.413Q3 18.825 3 18V14Q3 13.175 3.587 12.587Q4.175 12 5 12ZM10 17H18V15H10ZM7 17Q7.425 17 7.713 16.712Q8 16.425 8 16Q8 15.575 7.713 15.287Q7.425 15 7 15Q6.575 15 6.287 15.287Q6 15.575 6 16Q6 16.425 6.287 16.712Q6.575 17 7 17Z"/>
    </Icon>
  )
});

export default IconMaterialScannerOutlinedFilled;
