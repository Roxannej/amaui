import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBeenhereOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereOutlined'
      short_name='Beenhere'

      {...props}
    >
      <path d="M12 23 4.8 17.6Q4.425 17.325 4.213 16.9Q4 16.475 4 16V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V16Q20 16.475 19.788 16.9Q19.575 17.325 19.2 17.6ZM12 20.5 18 16Q18 16 18 16Q18 16 18 16V4Q18 4 18 4Q18 4 18 4H6Q6 4 6 4Q6 4 6 4V16Q6 16 6 16Q6 16 6 16ZM10.95 15 16.6 9.35 15.2 7.9 10.95 12.15 8.85 10.05 7.4 11.45ZM12 4H6Q6 4 6 4Q6 4 6 4Q6 4 6 4Q6 4 6 4H18Q18 4 18 4Q18 4 18 4Q18 4 18 4Q18 4 18 4Z"/>
    </Icon>
  )
});

export default IconMaterialBeenhereOutlined;
