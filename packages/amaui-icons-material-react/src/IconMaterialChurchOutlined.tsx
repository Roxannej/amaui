import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChurchOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchOutlined'
      short_name='Church'

      {...props}
    >
      <path d="M2 22V14L6 12.225V9L11 6.5V5H9V3H11V1H13V3H15V5H13V6.5L18 9V12.225L22 14V22H13V18Q13 17.575 12.713 17.288Q12.425 17 12 17Q11.575 17 11.288 17.288Q11 17.575 11 18V22ZM4 20H9V17.95Q9 16.675 9.875 15.788Q10.75 14.9 12 14.9Q13.25 14.9 14.125 15.788Q15 16.675 15 17.95V20H20V15.2L16 13.4V10.05L12 8L8 10.05V13.4L4 15.2ZM12 13.5Q12.625 13.5 13.062 13.062Q13.5 12.625 13.5 12Q13.5 11.375 13.062 10.938Q12.625 10.5 12 10.5Q11.375 10.5 10.938 10.938Q10.5 11.375 10.5 12Q10.5 12.625 10.938 13.062Q11.375 13.5 12 13.5ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  )
});

export default IconMaterialChurchOutlined;
