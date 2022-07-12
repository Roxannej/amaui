import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenRoundedW700Filled'
      short_name='AddToHomeScreen'

      {...props}
    >
      <path d="M3.7 15.925Q3.425 15.65 3.425 15.225Q3.425 14.8 3.7 14.525L8.225 10H5.625Q5.2 10 4.912 9.712Q4.625 9.425 4.625 9Q4.625 8.575 4.912 8.287Q5.2 8 5.625 8H10.05Q10.7 8 11.163 8.462Q11.625 8.925 11.625 9.575V14Q11.625 14.425 11.338 14.712Q11.05 15 10.625 15Q10.2 15 9.913 14.712Q9.625 14.425 9.625 14V11.4L5.1 15.925Q4.825 16.2 4.4 16.2Q3.975 16.2 3.7 15.925ZM8.375 23.775Q7.075 23.775 6.15 22.85Q5.225 21.925 5.225 20.625V17H8.375V17.625H17.625V6.375H8.375V7H5.225V3.375Q5.225 2.075 6.15 1.15Q7.075 0.225 8.375 0.225H17.625Q18.925 0.225 19.85 1.15Q20.775 2.075 20.775 3.375V20.625Q20.775 21.925 19.85 22.85Q18.925 23.775 17.625 23.775Z"/>
    </Icon>
  )
});

export default IconMaterialAddToHomeScreenRoundedW700Filled;
