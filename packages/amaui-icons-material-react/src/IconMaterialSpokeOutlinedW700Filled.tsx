import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpokeOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpokeOutlinedW700Filled'
      short_name='Spoke'

      {...props}
    >
      <path d="M12 11.45Q10 11.45 8.575 10.037Q7.15 8.625 7.15 6.625Q7.15 4.625 8.575 3.2Q10 1.775 12 1.775Q14 1.775 15.425 3.2Q16.85 4.625 16.85 6.625Q16.85 8.625 15.425 10.037Q14 11.45 12 11.45ZM6.225 21.85Q4.225 21.85 2.813 20.425Q1.4 19 1.4 17Q1.4 15 2.813 13.575Q4.225 12.15 6.225 12.15Q8.225 12.15 9.65 13.575Q11.075 15 11.075 17Q11.075 19 9.65 20.425Q8.225 21.85 6.225 21.85ZM17.775 21.85Q15.775 21.85 14.35 20.425Q12.925 19 12.925 17Q12.925 15 14.35 13.575Q15.775 12.15 17.775 12.15Q19.775 12.15 21.188 13.575Q22.6 15 22.6 17Q22.6 19 21.188 20.425Q19.775 21.85 17.775 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialSpokeOutlinedW700Filled;