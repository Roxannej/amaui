import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlakyOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlakyOutlinedW700Filled'
      short_name='Flaky'

      {...props}
    >
      <path d="M14.05 15.2 16.55 12.725 17.875 14.05 14.05 17.875 11.375 15.2 12.7 13.85ZM7.35 11.5 8.75 10.075 10.15 11.5 11.5 10.15 10.075 8.75 11.5 7.35 10.15 6 8.75 7.425 7.35 6 6 7.35 7.425 8.75 6 10.15ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85ZM12 19.7Q15.2 19.7 17.45 17.462Q19.7 15.225 19.7 12Q19.7 10.375 19.1 8.987Q18.5 7.6 17.45 6.55L6.55 17.45Q7.6 18.5 9 19.1Q10.4 19.7 12 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialFlakyOutlinedW700Filled;
