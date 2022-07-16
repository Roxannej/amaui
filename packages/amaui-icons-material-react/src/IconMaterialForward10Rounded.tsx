import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForward10Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward10Rounded'
      short_name='Forward10'

      {...props}
    >
      <path d="M9.75 16Q9.425 16 9.213 15.787Q9 15.575 9 15.25V11.5H8.25Q7.925 11.5 7.713 11.287Q7.5 11.075 7.5 10.75Q7.5 10.425 7.713 10.212Q7.925 10 8.25 10H9.5Q9.925 10 10.213 10.287Q10.5 10.575 10.5 11V15.25Q10.5 15.575 10.288 15.787Q10.075 16 9.75 16ZM12.5 16Q12.075 16 11.788 15.712Q11.5 15.425 11.5 15V11Q11.5 10.575 11.788 10.287Q12.075 10 12.5 10H14.5Q14.925 10 15.213 10.287Q15.5 10.575 15.5 11V15Q15.5 15.425 15.213 15.712Q14.925 16 14.5 16ZM13 14.5H14Q14 14.5 14 14.5Q14 14.5 14 14.5V11.5Q14 11.5 14 11.5Q14 11.5 14 11.5H13Q13 11.5 13 11.5Q13 11.5 13 11.5V14.5Q13 14.5 13 14.5Q13 14.5 13 14.5ZM12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.638 19.362Q4.425 18.15 3.712 16.512Q3 14.875 3 13Q3 11.125 3.712 9.487Q4.425 7.85 5.638 6.637Q6.85 5.425 8.488 4.713Q10.125 4 12 4H12.15L11.3 3.15Q11.025 2.875 11 2.475Q10.975 2.075 11.3 1.75Q11.6 1.45 12.013 1.437Q12.425 1.425 12.725 1.725L15.3 4.3Q15.45 4.45 15.513 4.625Q15.575 4.8 15.575 5Q15.575 5.2 15.513 5.375Q15.45 5.55 15.3 5.7L12.725 8.275Q12.45 8.55 12.013 8.537Q11.575 8.525 11.3 8.25Q11.025 7.975 11.025 7.55Q11.025 7.125 11.3 6.85L12.15 6H12Q9.075 6 7.038 8.037Q5 10.075 5 13Q5 15.925 7.038 17.962Q9.075 20 12 20Q14.675 20 16.625 18.288Q18.575 16.575 18.925 14Q18.975 13.575 19.275 13.287Q19.575 13 20 13Q20.425 13 20.712 13.3Q21 13.6 20.95 14Q20.575 17.4 18.038 19.7Q15.5 22 12 22Z"/>
    </Icon>
  );
});

export default IconMaterialForward10Rounded;