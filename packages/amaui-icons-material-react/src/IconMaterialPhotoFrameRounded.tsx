import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFrameRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrameRounded'
      short_name='PhotoFrame'

      {...props}
    >
      <path d="M5 15H19L14.5 9L11 13.5L8.5 10.5ZM6 21Q5.575 21 5.287 20.712Q5 20.425 5 20V19H3Q2.175 19 1.588 18.413Q1 17.825 1 17V6Q1 5.175 1.588 4.588Q2.175 4 3 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V17Q23 17.825 22.413 18.413Q21.825 19 21 19H19V20Q19 20.425 18.712 20.712Q18.425 21 18 21ZM3 17H21Q21 17 21 17Q21 17 21 17V6Q21 6 21 6Q21 6 21 6H3Q3 6 3 6Q3 6 3 6V17Q3 17 3 17Q3 17 3 17ZM3 17Q3 17 3 17Q3 17 3 17V6Q3 6 3 6Q3 6 3 6Q3 6 3 6Q3 6 3 6V17Q3 17 3 17Q3 17 3 17Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoFrameRounded;
