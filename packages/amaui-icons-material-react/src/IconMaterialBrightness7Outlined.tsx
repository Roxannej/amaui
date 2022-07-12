import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness7Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness7Outlined'
      short_name='Brightness7'

      {...props}
    >
      <path d="M12 23.3 8.65 20H4V15.35L0.7 12L4 8.65V4H8.65L12 0.7L15.35 4H20V8.65L23.3 12L20 15.35V20H15.35ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18ZM12 16Q10.35 16 9.175 14.825Q8 13.65 8 12Q8 10.35 9.175 9.175Q10.35 8 12 8Q13.65 8 14.825 9.175Q16 10.35 16 12Q16 13.65 14.825 14.825Q13.65 16 12 16ZM12 20.5 14.5 18H18V14.5L20.5 12L18 9.5V6H14.5L12 3.5L9.5 6H6V9.5L3.5 12L6 14.5V18H9.5ZM12 12ZM12 14.5Q10.95 14.5 10.225 13.775Q9.5 13.05 9.5 12Q9.5 10.95 10.225 10.225Q10.95 9.5 12 9.5Q13.05 9.5 13.775 10.225Q14.5 10.95 14.5 12Q14.5 13.05 13.775 13.775Q13.05 14.5 12 14.5Z"/>
    </Icon>
  )
});

export default IconMaterialBrightness7Outlined;
