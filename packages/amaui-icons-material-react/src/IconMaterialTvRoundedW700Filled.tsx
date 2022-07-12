import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvRoundedW700Filled'
      short_name='Tv'

      {...props}
    >
      <path d="M9.125 22.225Q8.475 22.225 8.012 21.763Q7.55 21.3 7.55 20.65V19.85H4.3Q3 19.85 2.075 18.925Q1.15 18 1.15 16.7V5.3Q1.15 4 2.075 3.075Q3 2.15 4.3 2.15H19.7Q21 2.15 21.925 3.075Q22.85 4 22.85 5.3V16.7Q22.85 18 21.925 18.925Q21 19.85 19.7 19.85H16.45V20.65Q16.45 21.3 15.988 21.763Q15.525 22.225 14.875 22.225Z"/>
    </Icon>
  )
});

export default IconMaterialTvRoundedW700Filled;
