import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledRoundedW700'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M17.4 14.025 15.125 11.725 7.15 3.775V3.475L18.5 10.675Q19.225 11.125 19.225 11.988Q19.225 12.85 18.5 13.325ZM9.575 19Q8.775 19.5 7.963 19.062Q7.15 18.625 7.15 17.675V10.5L1.575 4.925Q1.225 4.575 1.225 4.087Q1.225 3.6 1.575 3.25Q1.925 2.9 2.413 2.9Q2.9 2.9 3.25 3.25L20.75 20.75Q21.1 21.1 21.1 21.587Q21.1 22.075 20.75 22.425Q20.4 22.775 19.913 22.762Q19.425 22.75 19.075 22.4L13.3 16.65ZM10 13.325ZM10 15.35 11.2 14.575 10 13.325ZM15.125 11.725Z"/>
    </Icon>
  )
});

export default IconMaterialPlayDisabledRoundedW700;
