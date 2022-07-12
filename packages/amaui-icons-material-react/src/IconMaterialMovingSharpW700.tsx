import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovingSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingSharpW700'
      short_name='Moving'

      {...props}
    >
      <path d="M3.5 18.525 1.55 16.6 7.1 11.025Q8.1 10.025 9.5 10.025Q10.9 10.025 11.9 11.025L13.05 12.175Q13.25 12.375 13.488 12.375Q13.725 12.375 13.925 12.175L17.725 8.375H15.7V5.625H22.45V12.375H19.7V10.35L15.875 14.15Q14.875 15.15 13.475 15.15Q12.075 15.15 11.075 14.15L9.9 12.975Q9.725 12.8 9.488 12.8Q9.25 12.8 9.075 12.975Z"/>
    </Icon>
  )
});

export default IconMaterialMovingSharpW700;
