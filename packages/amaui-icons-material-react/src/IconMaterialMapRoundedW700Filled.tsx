import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapRoundedW700Filled'
      short_name='Map'

      {...props}
    >
      <path d="M13.975 21.525 9 19.775 4.65 21.5Q3.75 21.85 2.95 21.3Q2.15 20.75 2.15 19.75V5.75Q2.15 5.15 2.5 4.675Q2.85 4.2 3.425 4L7.975 2.45Q8.475 2.275 9 2.287Q9.525 2.3 10.025 2.475L15 4.225L19.35 2.5Q20.25 2.15 21.05 2.7Q21.85 3.25 21.85 4.25V18.25Q21.85 18.85 21.5 19.325Q21.15 19.8 20.575 20L16.025 21.55Q15.525 21.725 15 21.712Q14.475 21.7 13.975 21.525ZM14 18.2V7.2L10 5.8V16.8Z"/>
    </Icon>
  )
});

export default IconMaterialMapRoundedW700Filled;
