import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxSharpW700'
      short_name='Outbox'

      {...props}
    >
      <path d="M11 14.15V9.85L9.35 11.5L7.95 10.1L12 6.05L16.05 10.1L14.65 11.5L13 9.85V14.15ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V15.85H16Q15.25 16.8 14.213 17.325Q13.175 17.85 12 17.85Q10.825 17.85 9.788 17.325Q8.75 16.8 8 15.85H5.3ZM12 15.85Q12.95 15.85 13.725 15.3Q14.5 14.75 14.8 13.85H18.7V5.3H5.3V13.85H9.2Q9.5 14.75 10.275 15.3Q11.05 15.85 12 15.85ZM5.3 18.7H8Q8.75 18.7 9.788 18.7Q10.825 18.7 12 18.7Q13.175 18.7 14.213 18.7Q15.25 18.7 16 18.7H18.7Z"/>
    </Icon>
  )
});

export default IconMaterialOutboxSharpW700;
