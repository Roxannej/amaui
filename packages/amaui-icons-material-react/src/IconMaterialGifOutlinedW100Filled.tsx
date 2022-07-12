import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifOutlinedW100Filled'
      short_name='Gif'

      {...props}
    >
      <path d="M11.9 14.6V9.4H12.6V14.6ZM7.2 14.6Q6.6 14.6 6.15 14.15Q5.7 13.7 5.7 13.1V10.9Q5.7 10.3 6.15 9.85Q6.6 9.4 7.2 9.4H9.3Q9.575 9.4 9.738 9.587Q9.9 9.775 9.9 10V10.1H7.2Q6.9 10.1 6.65 10.35Q6.4 10.6 6.4 10.9V13.1Q6.4 13.4 6.65 13.65Q6.9 13.9 7.2 13.9H8.4Q8.7 13.9 8.95 13.65Q9.2 13.4 9.2 13.1V12.2H9.9V13.1Q9.9 13.7 9.45 14.15Q9 14.6 8.4 14.6ZM14.6 14.6V9.4H18.3V10.1H15.3V11.7H17.3V12.4H15.3V14.6Z"/>
    </Icon>
  )
});

export default IconMaterialGifOutlinedW100Filled;
