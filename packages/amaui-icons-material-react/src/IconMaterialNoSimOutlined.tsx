import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimOutlined'
      short_name='NoSim'

      {...props}
    >
      <path d="M20 17.175 18 15.175V4Q18 4 18 4Q18 4 18 4H10.85L8.85 6L7.4 4.6L10 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4ZM20.5 23.3 18.95 21.75Q18.725 21.875 18.5 21.938Q18.275 22 18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V8L4.6 7.4L0.7 3.5L2.125 2.1L21.9 21.875ZM6 8.8V20Q6 20 6 20Q6 20 6 20H17.15Q17.15 20 17.15 20Q17.15 20 17.15 20ZM13.525 10.675Q13.525 10.675 13.525 10.675Q13.525 10.675 13.525 10.675ZM11.65 14.475Q11.65 14.475 11.65 14.475Q11.65 14.475 11.65 14.475Q11.65 14.475 11.65 14.475Q11.65 14.475 11.65 14.475Z"/>
    </Icon>
  )
});

export default IconMaterialNoSimOutlined;
