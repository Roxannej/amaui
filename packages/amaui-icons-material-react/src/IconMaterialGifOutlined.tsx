import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifOutlined'
      short_name='Gif'

      {...props}
    >
      <path d="M11.5 15V9H13V15ZM6 15Q5.55 15 5.275 14.688Q5 14.375 5 14V10Q5 9.625 5.275 9.312Q5.55 9 6 9H9Q9.45 9 9.725 9.312Q10 9.625 10 10V10.5H6.5Q6.5 10.5 6.5 10.5Q6.5 10.5 6.5 10.5V13.5Q6.5 13.5 6.5 13.5Q6.5 13.5 6.5 13.5H8.5Q8.5 13.5 8.5 13.5Q8.5 13.5 8.5 13.5V12H10V14Q10 14.375 9.725 14.688Q9.45 15 9 15ZM14.5 15V9H19V10.5H16V11.5H18V13H16V15Z"/>
    </Icon>
  )
});

export default IconMaterialGifOutlined;
