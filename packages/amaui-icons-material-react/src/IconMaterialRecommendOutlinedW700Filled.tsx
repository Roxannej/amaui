import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecommendOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecommendOutlinedW700Filled'
      short_name='Recommend'

      {...props}
    >
      <path d="M12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85ZM9 17.925H14.5Q14.925 17.925 15.288 17.712Q15.65 17.5 15.8 17.125L17.9 12.3Q17.95 12.175 17.975 12.05Q18 11.925 18 11.8V11Q18 10.575 17.712 10.287Q17.425 10 17 10H12.4L13 6.6V6.4Q13 6.2 12.925 6.025Q12.85 5.85 12.7 5.7L12 5L7.4 10Q7.2 10.2 7.1 10.45Q7 10.7 7 11V15.925Q7 16.75 7.588 17.337Q8.175 17.925 9 17.925Z"/>
    </Icon>
  )
});

export default IconMaterialRecommendOutlinedW700Filled;
