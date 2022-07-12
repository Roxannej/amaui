import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUsbRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbRoundedW700Filled'
      short_name='Usb'

      {...props}
    >
      <path d="M12 22.775Q11.025 22.775 10.325 22.062Q9.625 21.35 9.625 20.375Q9.625 19.8 9.887 19.325Q10.15 18.85 10.625 18.5V16.775H8Q6.85 16.775 6.038 15.962Q5.225 15.15 5.225 14V11.925Q4.775 11.6 4.5 11.1Q4.225 10.6 4.225 10Q4.225 9 4.938 8.312Q5.65 7.625 6.625 7.625Q7.625 7.625 8.312 8.312Q9 9 9 10Q9 10.625 8.725 11.1Q8.45 11.575 8 11.9V14Q8 14 8 14Q8 14 8 14H10.625V6H9.85Q9.35 6 9.125 5.55Q8.9 5.1 9.2 4.7L11.35 1.825Q11.425 1.7 12 1.5Q12.2 1.5 12.363 1.575Q12.525 1.65 12.65 1.825L14.8 4.7Q15.1 5.1 14.875 5.55Q14.65 6 14.15 6H13.375V14H16Q16 14 16 14Q16 14 16 14V12.375H15.8Q15.45 12.375 15.225 12.15Q15 11.925 15 11.575V8.425Q15 8.075 15.225 7.85Q15.45 7.625 15.8 7.625H18.95Q19.3 7.625 19.538 7.85Q19.775 8.075 19.775 8.425V11.575Q19.775 11.925 19.538 12.15Q19.3 12.375 18.95 12.375H18.775V14Q18.775 15.15 17.963 15.962Q17.15 16.775 16 16.775H13.375V18.45Q13.85 18.8 14.113 19.3Q14.375 19.8 14.375 20.375Q14.375 21.35 13.675 22.062Q12.975 22.775 12 22.775Z"/>
    </Icon>
  )
});

export default IconMaterialUsbRoundedW700Filled;