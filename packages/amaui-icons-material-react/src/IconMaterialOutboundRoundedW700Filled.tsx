import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboundRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboundRoundedW700Filled'
      short_name='Outbound'

      {...props}
    >
      <path d="M13.525 12.55V13.125Q13.525 13.75 13.95 14.175Q14.375 14.6 15 14.6Q15.625 14.6 16.05 14.162Q16.475 13.725 16.475 13.1V9.1Q16.475 8.45 16.013 7.987Q15.55 7.525 14.9 7.525H10.875Q10.25 7.525 9.825 7.95Q9.4 8.375 9.4 9Q9.4 9.625 9.838 10.05Q10.275 10.475 10.9 10.475H11.425L7.825 14.075Q7.4 14.5 7.413 15.113Q7.425 15.725 7.85 16.15Q8.275 16.575 8.887 16.575Q9.5 16.575 9.925 16.15ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialOutboundRoundedW700Filled;
