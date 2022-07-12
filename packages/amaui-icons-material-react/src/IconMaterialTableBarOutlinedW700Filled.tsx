import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarOutlinedW700Filled'
      short_name='TableBar'

      {...props}
    >
      <path d="M4.975 20.575 6.775 16.05Q7.075 15.325 7.713 14.875Q8.35 14.425 9.15 14.425H10.425V11.925Q6.35 11.725 3.788 10.55Q1.225 9.375 1.225 7.7Q1.225 5.85 4.288 4.637Q7.35 3.425 12 3.425Q16.65 3.425 19.713 4.637Q22.775 5.85 22.775 7.7Q22.775 9.375 20.213 10.55Q17.65 11.725 13.575 11.925V14.425H14.85Q15.625 14.425 16.288 14.875Q16.95 15.325 17.225 16.05L19.025 20.575H15.8L14.6 17.575H9.4L8.2 20.575Z"/>
    </Icon>
  )
});

export default IconMaterialTableBarOutlinedW700Filled;
