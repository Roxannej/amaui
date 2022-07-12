import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFrameTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrameTwoTone'
      short_name='PhotoFrame'

      {...props}
    >
      <path d="M5.125 14.925H18.875L14.125 8.725L11.125 12.6L9 10.05ZM6.05 22Q5.425 22 4.988 21.562Q4.55 21.125 4.55 20.5V19.65H3.425Q2.15 19.65 1.275 18.775Q0.4 17.9 0.4 16.625V6.4Q0.4 5.125 1.275 4.25Q2.15 3.375 3.425 3.375H20.575Q21.85 3.375 22.725 4.25Q23.6 5.125 23.6 6.4V16.625Q23.6 17.9 22.725 18.775Q21.85 19.65 20.575 19.65H19.45V20.5Q19.45 21.125 19.013 21.562Q18.575 22 17.95 22Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoFrameTwoTone;
