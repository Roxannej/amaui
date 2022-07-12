import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInboxOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxOutlined'
      short_name='AllInbox'

      {...props}
    >
      <path d="M14 15Q12.95 15 12.025 14.462Q11.1 13.925 10.55 13H8V16Q8 16 8 16Q8 16 8 16H20Q20 16 20 16Q20 16 20 16V13H17.45Q16.925 13.925 16 14.462Q15.075 15 14 15ZM14 13Q14.85 13 15.425 12.412Q16 11.825 16 11H20V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4V11H12Q12 11.825 12.588 12.412Q13.175 13 14 13ZM14 16Q15.075 16 16 16Q16.925 16 17.45 16H20Q20 16 20 16Q20 16 20 16H8Q8 16 8 16Q8 16 8 16H10.55Q11.1 16 12.025 16Q12.95 16 14 16ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialAllInboxOutlined;