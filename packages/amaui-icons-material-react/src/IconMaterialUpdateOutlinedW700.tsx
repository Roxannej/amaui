import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpdateOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateOutlinedW700'
      short_name='Update'

      {...props}
    >
      <path d="M14.625 16.4 10.825 12.6V7H13.2V11.6L16.325 14.7ZM12.025 21.85Q10 21.85 8.2 21.075Q6.4 20.3 5.062 18.962Q3.725 17.625 2.95 15.825Q2.175 14.025 2.175 12Q2.175 9.975 2.95 8.175Q3.725 6.375 5.062 5.037Q6.4 3.7 8.2 2.925Q10 2.15 12.025 2.15Q14.125 2.15 15.988 2.975Q17.85 3.8 19.25 5.35V3.375H21.625V10H14.95V7.575H17Q16.05 6.475 14.75 5.887Q13.45 5.3 12.025 5.3Q9.225 5.3 7.275 7.25Q5.325 9.2 5.325 12Q5.325 14.8 7.275 16.75Q9.225 18.7 12.025 18.7Q14.525 18.7 16.387 17.087Q18.25 15.475 18.625 13H21.8Q21.45 16.8 18.638 19.325Q15.825 21.85 12.025 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialUpdateOutlinedW700;
