import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStormRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StormRoundedW700Filled'
      short_name='Storm'

      {...props}
    >
      <path d="M19.975 22Q19.25 22 18.875 21.488Q18.5 20.975 18.7 20.225Q18.9 19.425 19.025 18.638Q19.15 17.85 19.15 17.05Q17.9 18.775 16.025 19.775Q14.15 20.775 12 20.775Q9.75 20.775 7.912 19.725Q6.075 18.675 4.763 16.925Q3.45 15.175 2.737 12.9Q2.025 10.625 2.025 8.15Q2.025 6.825 2.188 5.537Q2.35 4.25 2.7 2.975Q2.825 2.575 3.2 2.287Q3.575 2 4.025 2Q4.775 2 5.138 2.512Q5.5 3.025 5.3 3.775Q5.1 4.55 4.975 5.35Q4.85 6.15 4.85 6.95Q6.125 5.225 7.988 4.225Q9.85 3.225 12 3.225Q14.25 3.225 16.1 4.275Q17.95 5.325 19.25 7.062Q20.55 8.8 21.263 11.087Q21.975 13.375 21.975 15.85Q21.975 17.15 21.812 18.45Q21.65 19.75 21.3 21.025Q21.175 21.425 20.8 21.712Q20.425 22 19.975 22ZM12 16.375Q13.8 16.375 15.088 15.087Q16.375 13.8 16.375 12Q16.375 10.2 15.088 8.912Q13.8 7.625 12 7.625Q10.2 7.625 8.913 8.912Q7.625 10.2 7.625 12Q7.625 13.8 8.913 15.087Q10.2 16.375 12 16.375ZM12 13.625Q11.325 13.625 10.85 13.15Q10.375 12.675 10.375 12Q10.375 11.325 10.85 10.85Q11.325 10.375 12 10.375Q12.675 10.375 13.15 10.85Q13.625 11.325 13.625 12Q13.625 12.675 13.15 13.15Q12.675 13.625 12 13.625Z"/>
    </Icon>
  )
});

export default IconMaterialStormRoundedW700Filled;