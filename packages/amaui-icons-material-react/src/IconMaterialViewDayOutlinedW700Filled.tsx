import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDayOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayOutlinedW700Filled'
      short_name='ViewDay'

      {...props}
    >
      <path d="M1.775 5.55V2.4H22.225V5.55ZM4.925 16.85Q3.6 16.85 2.688 15.938Q1.775 15.025 1.775 13.7V10.3Q1.775 8.975 2.688 8.062Q3.6 7.15 4.925 7.15H19.075Q20.4 7.15 21.312 8.062Q22.225 8.975 22.225 10.3V13.7Q22.225 15.025 21.312 15.938Q20.4 16.85 19.075 16.85ZM1.775 21.6V18.45H22.225V21.6Z"/>
    </Icon>
  )
});

export default IconMaterialViewDayOutlinedW700Filled;
