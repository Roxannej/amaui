import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesOutlinedW700Filled'
      short_name='Headphones'

      {...props}
    >
      <path d="M9.7 21.775H5.3Q3.975 21.775 3.062 20.862Q2.15 19.95 2.15 18.625V12Q2.15 9.975 2.925 8.175Q3.7 6.375 5.037 5.037Q6.375 3.7 8.175 2.925Q9.975 2.15 12 2.15Q14.025 2.15 15.825 2.925Q17.625 3.7 18.962 5.037Q20.3 6.375 21.075 8.175Q21.85 9.975 21.85 12V18.625Q21.85 19.95 20.938 20.862Q20.025 21.775 18.7 21.775H14.3V12.225H18.7V12Q18.7 9.2 16.75 7.25Q14.8 5.3 12 5.3Q9.2 5.3 7.25 7.25Q5.3 9.2 5.3 12V12.225H9.7Z"/>
    </Icon>
  )
});

export default IconMaterialHeadphonesOutlinedW700Filled;
