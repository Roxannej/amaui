import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifOutlinedW700'
      short_name='Gif'

      {...props}
    >
      <path d="M11.3 15.2V8.8H13.2V15.2ZM5.625 15.2Q5.075 15.2 4.75 14.812Q4.425 14.425 4.425 14V10Q4.425 9.525 4.75 9.162Q5.075 8.8 5.625 8.8H8.625Q9.175 8.8 9.488 9.162Q9.8 9.525 9.8 10V10.7H6.3Q6.3 10.7 6.3 10.7Q6.3 10.7 6.3 10.7V13.3Q6.3 13.3 6.3 13.3Q6.3 13.3 6.3 13.3H7.925Q7.925 13.3 7.925 13.3Q7.925 13.3 7.925 13.3V12H9.8V14.075Q9.8 14.5 9.488 14.85Q9.175 15.2 8.625 15.2ZM14.7 15.2V8.8H19.575V10.7H16.575V11.55H18.575V13.425H16.575V15.2Z"/>
    </Icon>
  )
});

export default IconMaterialGifOutlinedW700;
