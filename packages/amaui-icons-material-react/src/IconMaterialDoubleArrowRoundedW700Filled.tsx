import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoubleArrowRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowRoundedW700Filled'
      short_name='DoubleArrow'

      {...props}
    >
      <path d="M14.675 19.575Q13.725 19.575 13.275 18.737Q12.825 17.9 13.375 17.1L17 12L13.375 6.9Q12.825 6.1 13.275 5.262Q13.725 4.425 14.675 4.425Q15.1 4.425 15.438 4.625Q15.775 4.825 16.025 5.175L20.225 11.075Q20.375 11.275 20.438 11.512Q20.5 11.75 20.5 12Q20.5 12.25 20.438 12.488Q20.375 12.725 20.225 12.925L16.025 18.825Q15.775 19.175 15.438 19.375Q15.1 19.575 14.675 19.575ZM7.3 19.575Q6.35 19.575 5.9 18.737Q5.45 17.9 6 17.1L9.625 12L6 6.9Q5.45 6.1 5.9 5.262Q6.35 4.425 7.3 4.425Q7.725 4.425 8.062 4.625Q8.4 4.825 8.65 5.175L12.85 11.075Q13 11.275 13.075 11.512Q13.15 11.75 13.15 12Q13.15 12.25 13.075 12.488Q13 12.725 12.85 12.925L8.65 18.825Q8.4 19.175 8.062 19.375Q7.725 19.575 7.3 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialDoubleArrowRoundedW700Filled;
