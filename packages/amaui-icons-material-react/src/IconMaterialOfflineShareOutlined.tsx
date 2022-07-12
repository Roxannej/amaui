import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOfflineShareOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareOutlined'
      short_name='OfflineShare'

      {...props}
    >
      <path d="M16 23H6Q5.175 23 4.588 22.413Q4 21.825 4 21V5H6V21Q6 21 6 21Q6 21 6 21H16ZM11 12V9.75Q11 9.325 11.288 9.037Q11.575 8.75 12 8.75H14.15L13.45 8.05L14.5 7L17 9.5L14.5 12L13.45 10.95L14.15 10.25H12.5V12ZM10 19Q9.175 19 8.588 18.413Q8 17.825 8 17V3Q8 2.175 8.588 1.587Q9.175 1 10 1H18Q18.825 1 19.413 1.587Q20 2.175 20 3V17Q20 17.825 19.413 18.413Q18.825 19 18 19ZM10 16V17Q10 17 10 17Q10 17 10 17H18Q18 17 18 17Q18 17 18 17V16ZM10 16V17Q10 17 10 17Q10 17 10 17Q10 17 10 17Q10 17 10 17V16ZM10 14H18V6H10ZM10 4H18V3Q18 3 18 3Q18 3 18 3H10Q10 3 10 3Q10 3 10 3ZM10 4V3Q10 3 10 3Q10 3 10 3Q10 3 10 3Q10 3 10 3Z"/>
    </Icon>
  )
});

export default IconMaterialOfflineShareOutlined;
