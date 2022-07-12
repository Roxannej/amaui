import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckCircleRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleRoundedW700Filled'
      short_name='CheckCircle'

      {...props}
    >
      <path d="M10.525 12.925 9 11.4Q8.575 10.975 7.975 10.975Q7.375 10.975 6.925 11.425Q6.5 11.85 6.5 12.462Q6.5 13.075 6.925 13.5L9.425 16Q9.875 16.45 10.525 16.45Q11.175 16.45 11.625 16L16.925 10.675Q17.35 10.25 17.35 9.662Q17.35 9.075 16.9 8.625Q16.475 8.2 15.863 8.2Q15.25 8.2 14.825 8.625ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialCheckCircleRoundedW700Filled;
