import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomePinTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomePinTwoTone'
      short_name='HomePin'

      {...props}
    >
      <path d="M9.075 12.925V8.025L12 6.075L14.95 8.025V12.925H13.075V9.925H10.95V12.925ZM12 18.65Q14.8 16.075 16.15 13.95Q17.5 11.825 17.5 10.2Q17.5 7.675 15.913 6.088Q14.325 4.5 12 4.5Q9.7 4.5 8.113 6.088Q6.525 7.675 6.525 10.2Q6.525 11.825 7.863 13.95Q9.2 16.075 12 18.65ZM12 22.65Q7.725 18.975 5.613 15.9Q3.5 12.825 3.5 10.2Q3.5 6.2 6.062 3.837Q8.625 1.475 12 1.475Q15.375 1.475 17.95 3.85Q20.525 6.225 20.525 10.2Q20.525 12.825 18.413 15.9Q16.3 18.975 12 22.65Z"/>
    </Icon>
  )
});

export default IconMaterialHomePinTwoTone;
