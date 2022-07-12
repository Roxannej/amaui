import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageRoundedW700Filled'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M2.15 7.55V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V12.025L18.625 8.8Q18.475 8.675 18.263 8.6Q18.05 8.525 17.775 8.525Q17.45 8.525 17.163 8.637Q16.875 8.75 16.625 9L13.925 11.725L11.175 8.975Q10.95 8.75 10.663 8.637Q10.375 8.525 10.075 8.525Q9.775 8.525 9.488 8.637Q9.2 8.75 8.975 8.975L6.275 11.675ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V12.025L5.375 15.225Q5.5 15.35 5.738 15.425Q5.975 15.5 6.25 15.5Q6.575 15.5 6.85 15.387Q7.125 15.275 7.375 15.025L10.075 12.325L12.825 15.075Q13.05 15.3 13.338 15.4Q13.625 15.5 13.925 15.5Q14.225 15.5 14.513 15.4Q14.8 15.3 15.025 15.075L17.725 12.35L21.85 16.475V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageRoundedW700Filled;
