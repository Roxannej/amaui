import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFilterOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterOutlinedW700'
      short_name='PhotoFilter'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H13.925V5.3H5.3Q5.3 5.3 5.3 5.3Q5.3 5.3 5.3 5.3V18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7H18.7Q18.7 18.7 18.7 18.7Q18.7 18.7 18.7 18.7V10.075H21.85V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM12 16 10.75 13.25 8 12 10.75 10.75 12 8 13.25 10.75 16 12 13.25 13.25ZM17 10 16.05 7.95 14 7 16.05 6.05 17 4 17.95 6.05 20 7 17.95 7.95Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoFilterOutlinedW700;
