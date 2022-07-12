import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleLeftRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleLeftRoundedW700Filled'
      short_name='ArrowCircleLeft'

      {...props}
    >
      <path d="M11.125 16.1Q11.575 16.55 12.213 16.538Q12.85 16.525 13.3 16.075Q13.75 15.625 13.75 14.975Q13.75 14.325 13.3 13.875L13 13.575H15.225Q15.875 13.575 16.325 13.112Q16.775 12.65 16.775 12Q16.775 11.35 16.312 10.887Q15.85 10.425 15.2 10.425H13L13.325 10.1Q13.775 9.65 13.762 9.012Q13.75 8.375 13.3 7.925Q12.85 7.475 12.2 7.475Q11.55 7.475 11.1 7.925L8.1 10.9Q7.65 11.35 7.65 12Q7.65 12.65 8.1 13.1ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialArrowCircleLeftRoundedW700Filled;
