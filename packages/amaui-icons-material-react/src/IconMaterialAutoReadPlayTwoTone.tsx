import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPlayTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayTwoTone'
      short_name='AutoReadPlay'

      {...props}
    >
      <path d="M10.075 13.85 15.85 10 10.075 6.15ZM1.4 22.475V4.4Q1.4 3.125 2.275 2.25Q3.15 1.375 4.425 1.375H19.575Q20.85 1.375 21.725 2.25Q22.6 3.125 22.6 4.4V15.6Q22.6 16.875 21.725 17.75Q20.85 18.625 19.575 18.625H5.25Z"/>
    </Icon>
  )
});

export default IconMaterialAutoReadPlayTwoTone;