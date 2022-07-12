import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnRoundedFilled'
      short_name='FlashOn'

      {...props}
    >
      <path d="M10.925 21.4Q10.725 21.75 10.363 21.637Q10 21.525 10 21.15V14H8Q7.575 14 7.287 13.712Q7 13.425 7 13V3Q7 2.575 7.287 2.287Q7.575 2 8 2H15.45Q16 2 16.3 2.45Q16.6 2.9 16.375 3.4L13 11H15.25Q15.825 11 16.125 11.5Q16.425 12 16.125 12.5Z"/>
    </Icon>
  )
});

export default IconMaterialFlashOnRoundedFilled;
