import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExploreRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreRoundedW700Filled'
      short_name='Explore'

      {...props}
    >
      <path d="M7.5 16.975 13.625 14.525Q13.925 14.4 14.163 14.162Q14.4 13.925 14.525 13.625L16.975 7.5Q17.075 7.275 16.9 7.1Q16.725 6.925 16.5 7.025L10.375 9.475Q10.075 9.6 9.838 9.837Q9.6 10.075 9.475 10.375L7.025 16.5Q6.925 16.725 7.1 16.9Q7.275 17.075 7.5 16.975ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11Q12.425 11 12.713 11.287Q13 11.575 13 12Q13 12.425 12.713 12.712Q12.425 13 12 13ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialExploreRoundedW700Filled;
