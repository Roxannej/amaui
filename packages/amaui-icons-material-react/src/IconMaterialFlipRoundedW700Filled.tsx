import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipRoundedW700Filled'
      short_name='Flip'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H7.3Q7.95 2.15 8.412 2.612Q8.875 3.075 8.875 3.725Q8.875 4.375 8.412 4.838Q7.95 5.3 7.3 5.3H5.3Q5.3 5.3 5.3 5.3Q5.3 5.3 5.3 5.3V18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7H7.3Q7.95 18.7 8.412 19.163Q8.875 19.625 8.875 20.275Q8.875 20.925 8.412 21.388Q7.95 21.85 7.3 21.85ZM12.075 23.775Q11.425 23.775 10.963 23.312Q10.5 22.85 10.5 22.2V1.8Q10.5 1.15 10.963 0.687Q11.425 0.225 12.075 0.225Q12.725 0.225 13.188 0.687Q13.65 1.15 13.65 1.8V22.2Q13.65 22.85 13.188 23.312Q12.725 23.775 12.075 23.775ZM18.7 5.3V2.15Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3H18.7ZM18.7 13.15V10.85H21.85V13.15ZM18.7 21.85V18.7H21.85Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM18.7 9.225V6.925H21.85V9.225ZM18.7 17.075V14.775H21.85V17.075ZM15.275 21.85V18.7H17.075V21.85ZM15.275 5.3V2.15H17.075V5.3Z"/>
    </Icon>
  )
});

export default IconMaterialFlipRoundedW700Filled;
