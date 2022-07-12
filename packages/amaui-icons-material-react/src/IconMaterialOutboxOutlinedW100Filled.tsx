import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxOutlinedW100Filled'
      short_name='Outbox'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5 14.8H8.9Q9.2 15.675 10.113 16.238Q11.025 16.8 12 16.8Q12.975 16.8 13.888 16.238Q14.8 15.675 15.1 14.8H19V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8ZM11.65 13.1V8.25L9.4 10.5L8.9 10L12 6.9L15.1 10L14.6 10.5L12.35 8.25V13.1Z"/>
    </Icon>
  )
});

export default IconMaterialOutboxOutlinedW100Filled;
