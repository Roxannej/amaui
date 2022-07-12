import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial30fpsOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsOutlined'
      short_name='30fps'

      {...props}
    >
      <path d="M2 19V16H8Q8 16 8 16Q8 16 8 16V13.5Q8 13.5 8 13.5Q8 13.5 8 13.5H2V10.5H8Q8 10.5 8 10.5Q8 10.5 8 10.5V8Q8 8 8 8Q8 8 8 8H2V5H8Q9.25 5 10.125 5.875Q11 6.75 11 8V9.9Q11 10.775 10.387 11.387Q9.775 12 8.9 12Q9.775 12 10.387 12.613Q11 13.225 11 14.1V16Q11 17.25 10.125 18.125Q9.25 19 8 19ZM15 16H19Q19 16 19 16Q19 16 19 16V8Q19 8 19 8Q19 8 19 8H15Q15 8 15 8Q15 8 15 8V16Q15 16 15 16Q15 16 15 16ZM15 19Q13.75 19 12.875 18.125Q12 17.25 12 16V8Q12 6.75 12.875 5.875Q13.75 5 15 5H19Q20.25 5 21.125 5.875Q22 6.75 22 8V16Q22 17.25 21.125 18.125Q20.25 19 19 19Z"/>
    </Icon>
  )
});

export default IconMaterial30fpsOutlined;
