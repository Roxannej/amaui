import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarOutlinedW100Filled'
      short_name='TableBar'

      {...props}
    >
      <path d="M6.95 18.725 8.25 15.5Q8.35 15.3 8.537 15.162Q8.725 15.025 8.95 15.025H11.65V9.975Q8.35 9.925 6.112 9.2Q3.875 8.475 3.875 7.5Q3.875 6.45 6.225 5.737Q8.575 5.025 12 5.025Q15.425 5.025 17.775 5.737Q20.125 6.45 20.125 7.5Q20.125 8.5 17.875 9.212Q15.625 9.925 12.35 9.975V15.025H15.05Q15.275 15.025 15.463 15.162Q15.65 15.3 15.75 15.5L17.05 18.725H16.3L15.1 15.725H8.9L7.7 18.725Z"/>
    </Icon>
  )
});

export default IconMaterialTableBarOutlinedW100Filled;