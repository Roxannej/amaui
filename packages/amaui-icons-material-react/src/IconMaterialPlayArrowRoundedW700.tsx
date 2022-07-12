import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowRoundedW700'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M9.575 19Q8.775 19.5 7.963 19.062Q7.15 18.625 7.15 17.675V6.325Q7.15 5.375 7.963 4.938Q8.775 4.5 9.575 5L18.475 10.675Q19.2 11.15 19.2 12.012Q19.2 12.875 18.475 13.325ZM10.3 12ZM10.3 14.775 14.675 12 10.3 9.225Z"/>
    </Icon>
  )
});

export default IconMaterialPlayArrowRoundedW700;
