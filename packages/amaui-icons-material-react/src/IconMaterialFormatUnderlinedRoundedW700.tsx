import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedRoundedW700'
      short_name='FormatUnderlined'

      {...props}
    >
      <path d="M12 17.2Q9.25 17.2 7.338 15.287Q5.425 13.375 5.425 10.625V3.875Q5.425 3.125 5.963 2.587Q6.5 2.05 7.25 2.05Q8 2.05 8.538 2.587Q9.075 3.125 9.075 3.875V10.625Q9.075 11.875 9.913 12.712Q10.75 13.55 12 13.55Q13.25 13.55 14.088 12.712Q14.925 11.875 14.925 10.625V3.875Q14.925 3.125 15.463 2.587Q16 2.05 16.75 2.05Q17.5 2.05 18.038 2.587Q18.575 3.125 18.575 3.875V10.625Q18.575 13.375 16.663 15.287Q14.75 17.2 12 17.2ZM6 21.95Q5.35 21.95 4.888 21.487Q4.425 21.025 4.425 20.375Q4.425 19.725 4.888 19.263Q5.35 18.8 6 18.8H18Q18.65 18.8 19.113 19.263Q19.575 19.725 19.575 20.375Q19.575 21.025 19.113 21.487Q18.65 21.95 18 21.95Z"/>
    </Icon>
  )
});

export default IconMaterialFormatUnderlinedRoundedW700;
