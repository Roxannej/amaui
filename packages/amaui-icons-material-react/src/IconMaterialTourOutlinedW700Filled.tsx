import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTourOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourOutlinedW700Filled'
      short_name='Tour'

      {...props}
    >
      <path d="M4.55 22.85V1.15H7.7V2.925H22.725L20.225 9L22.725 15.075H7.7V22.85ZM12.775 11Q13.6 11 14.188 10.412Q14.775 9.825 14.775 9Q14.775 8.175 14.188 7.587Q13.6 7 12.775 7Q11.95 7 11.363 7.587Q10.775 8.175 10.775 9Q10.775 9.825 11.363 10.412Q11.95 11 12.775 11Z"/>
    </Icon>
  )
});

export default IconMaterialTourOutlinedW700Filled;