import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoRoundedW700Filled'
      short_name='Photo'

      {...props}
    >
      <path d="M7.125 17.3H16.85Q17.35 17.3 17.575 16.863Q17.8 16.425 17.525 16.025L14.9 12.4Q14.65 12.05 14.238 12.05Q13.825 12.05 13.575 12.375L11.25 15.5L9.675 13.4Q9.425 13.05 9.012 13.05Q8.6 13.05 8.35 13.4L6.475 16.025Q6.2 16.425 6.412 16.863Q6.625 17.3 7.125 17.3ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoRoundedW700Filled;
