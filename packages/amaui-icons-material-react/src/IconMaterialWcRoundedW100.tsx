import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWcRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcRoundedW100'
      short_name='Wc'

      {...props}
    >
      <path d="M7.1 21.35Q6.775 21.35 6.562 21.138Q6.35 20.925 6.35 20.6V14.5H5.6Q5.275 14.5 5.062 14.287Q4.85 14.075 4.85 13.75V9Q4.85 8.425 5.238 8.037Q5.625 7.65 6.2 7.65H8.8Q9.375 7.65 9.762 8.037Q10.15 8.425 10.15 9V13.75Q10.15 14.075 9.938 14.287Q9.725 14.5 9.4 14.5H8.65V20.6Q8.65 20.925 8.438 21.138Q8.225 21.35 7.9 21.35ZM16.4 21.35Q16.075 21.35 15.863 21.138Q15.65 20.925 15.65 20.6V16H14.35Q14 16 13.775 15.712Q13.55 15.425 13.625 15.075L15.25 8.55Q15.375 8.125 15.713 7.887Q16.05 7.65 16.5 7.65Q16.95 7.65 17.288 7.887Q17.625 8.125 17.75 8.55L19.375 15.075Q19.45 15.425 19.225 15.712Q19 16 18.65 16H17.35V20.6Q17.35 20.925 17.138 21.138Q16.925 21.35 16.6 21.35ZM7.5 6.6Q6.825 6.6 6.363 6.137Q5.9 5.675 5.9 5Q5.9 4.325 6.363 3.862Q6.825 3.4 7.5 3.4Q8.175 3.4 8.637 3.862Q9.1 4.325 9.1 5Q9.1 5.675 8.637 6.137Q8.175 6.6 7.5 6.6ZM16.5 6.6Q15.825 6.6 15.363 6.137Q14.9 5.675 14.9 5Q14.9 4.325 15.363 3.862Q15.825 3.4 16.5 3.4Q17.175 3.4 17.638 3.862Q18.1 4.325 18.1 5Q18.1 5.675 17.638 6.137Q17.175 6.6 16.5 6.6Z"/>
    </Icon>
  )
});

export default IconMaterialWcRoundedW100;