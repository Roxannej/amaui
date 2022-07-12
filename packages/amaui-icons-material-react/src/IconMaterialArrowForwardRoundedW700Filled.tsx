import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardRoundedW700Filled'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M10.9 19.25Q10.425 18.775 10.413 18.137Q10.4 17.5 10.875 17.025L14.325 13.575H5.2Q4.55 13.575 4.088 13.112Q3.625 12.65 3.625 12Q3.625 11.35 4.088 10.887Q4.55 10.425 5.2 10.425H14.325L10.875 6.95Q10.4 6.475 10.413 5.85Q10.425 5.225 10.9 4.75Q11.375 4.275 12.012 4.275Q12.65 4.275 13.125 4.75L19.3 10.9Q19.55 11.125 19.65 11.412Q19.75 11.7 19.75 12Q19.75 12.3 19.65 12.575Q19.55 12.85 19.3 13.1L13.125 19.275Q12.65 19.75 12.012 19.738Q11.375 19.725 10.9 19.25Z"/>
    </Icon>
  )
});

export default IconMaterialArrowForwardRoundedW700Filled;
