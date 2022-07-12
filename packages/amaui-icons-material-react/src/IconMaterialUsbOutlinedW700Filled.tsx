import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUsbOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbOutlinedW700Filled'
      short_name='Usb'

      {...props}
    >
      <path d="M12 22.775Q11.025 22.775 10.325 22.062Q9.625 21.35 9.625 20.375Q9.625 19.8 9.887 19.325Q10.15 18.85 10.625 18.5V16.775H8Q6.85 16.775 6.038 15.962Q5.225 15.15 5.225 14V11.925Q4.775 11.6 4.5 11.1Q4.225 10.6 4.225 10Q4.225 9 4.938 8.312Q5.65 7.625 6.625 7.625Q7.625 7.625 8.312 8.312Q9 9 9 10Q9 10.625 8.725 11.1Q8.45 11.575 8 11.9V14Q8 14 8 14Q8 14 8 14H10.625V6H8.225L12 0.975L15.775 6H13.375V14H16Q16 14 16 14Q16 14 16 14V12.375H15V7.625H19.775V12.375H18.775V14Q18.775 15.15 17.963 15.962Q17.15 16.775 16 16.775H13.375V18.45Q13.85 18.8 14.113 19.3Q14.375 19.8 14.375 20.375Q14.375 21.35 13.675 22.062Q12.975 22.775 12 22.775Z"/>
    </Icon>
  )
});

export default IconMaterialUsbOutlinedW700Filled;