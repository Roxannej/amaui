import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleDownRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleDownRoundedW700Filled'
      short_name='ArrowCircleDown'

      {...props}
    >
      <path d="M12 16.225Q12.3 16.225 12.575 16.125Q12.85 16.025 13.1 15.775L16.075 12.8Q16.525 12.35 16.525 11.7Q16.525 11.05 16.075 10.6Q15.625 10.15 14.975 10.15Q14.325 10.15 13.875 10.6L13.575 10.9V8.7Q13.575 8.05 13.113 7.587Q12.65 7.125 12 7.125Q11.35 7.125 10.888 7.587Q10.425 8.05 10.425 8.7V10.9L10.125 10.6Q9.675 10.15 9.025 10.15Q8.375 10.15 7.925 10.6Q7.475 11.05 7.475 11.7Q7.475 12.35 7.925 12.8L10.9 15.775Q11.15 16.025 11.425 16.125Q11.7 16.225 12 16.225ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialArrowCircleDownRoundedW700Filled;