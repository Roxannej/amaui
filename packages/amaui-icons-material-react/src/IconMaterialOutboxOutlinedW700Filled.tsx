import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxOutlinedW700Filled'
      short_name='Outbox'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM5.3 13.85H9.2Q9.5 14.725 10.262 15.287Q11.025 15.85 12 15.85Q12.975 15.85 13.738 15.287Q14.5 14.725 14.8 13.85H18.7V5.3Q18.7 5.3 18.7 5.3Q18.7 5.3 18.7 5.3H5.3Q5.3 5.3 5.3 5.3Q5.3 5.3 5.3 5.3ZM11 14.15V9.85L9.35 11.5L7.95 10.1L12 6.05L16.05 10.1L14.65 11.5L13 9.85V14.15Z"/>
    </Icon>
  )
});

export default IconMaterialOutboxOutlinedW700Filled;