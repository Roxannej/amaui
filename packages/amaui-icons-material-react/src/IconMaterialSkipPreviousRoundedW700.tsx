import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipPreviousRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousRoundedW700'
      short_name='SkipPrevious'

      {...props}
    >
      <path d="M5.5 19.575Q4.85 19.575 4.388 19.112Q3.925 18.65 3.925 18V6Q3.925 5.35 4.388 4.887Q4.85 4.425 5.5 4.425Q6.15 4.425 6.613 4.887Q7.075 5.35 7.075 6V18Q7.075 18.65 6.613 19.112Q6.15 19.575 5.5 19.575ZM17.625 17.95 10.675 13.3Q9.975 12.825 9.975 12Q9.975 11.175 10.675 10.7L17.625 6.05Q18.425 5.525 19.25 5.975Q20.075 6.425 20.075 7.375V16.625Q20.075 17.575 19.238 18.025Q18.4 18.475 17.625 17.95ZM16.925 12ZM16.925 13.675V10.325L14.375 12Z"/>
    </Icon>
  )
});

export default IconMaterialSkipPreviousRoundedW700;
