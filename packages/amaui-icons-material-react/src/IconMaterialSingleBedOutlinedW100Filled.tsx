import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSingleBedOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedOutlinedW100Filled'
      short_name='SingleBed'

      {...props}
    >
      <path d="M6.7 17.7H6.3L6 15.7H5.3V12.8Q5.3 12.175 5.738 11.737Q6.175 11.3 6.8 11.3H7.3V9.1Q7.3 8.475 7.738 8.037Q8.175 7.6 8.8 7.6H15.2Q15.825 7.6 16.262 8.037Q16.7 8.475 16.7 9.1V11.3H17.2Q17.825 11.3 18.262 11.737Q18.7 12.175 18.7 12.8V15.7H18L17.7 17.7H17.3L17 15.7H7ZM12.35 11.3H16V9.1Q16 8.75 15.775 8.525Q15.55 8.3 15.2 8.3H12.35ZM8 11.3H11.65V8.3H8.8Q8.45 8.3 8.225 8.525Q8 8.75 8 9.1Z"/>
    </Icon>
  )
});

export default IconMaterialSingleBedOutlinedW100Filled;