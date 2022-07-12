import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompostSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompostSharp'
      short_name='Compost'

      {...props}
    >
      <path d="M12 21.5Q10.025 21.5 8.3 20.75Q6.575 20 5.287 18.712Q4 17.425 3.25 15.7Q2.5 13.975 2.5 12Q2.5 10.025 3.25 8.3Q4 6.575 5.287 5.287Q6.575 4 8.3 3.25Q10.025 2.5 12 2.5V0L16 4L12 8V5.5Q9.3 5.5 7.4 7.4Q5.5 9.3 5.5 12Q5.5 13.65 6.263 15.062Q7.025 16.475 8.3 17.35Q8.7 16.65 9.488 16.162Q10.275 15.675 11.3 15.55Q11.225 15.025 11.1 14.5Q10.975 13.975 10.8 13.525Q10.525 13.75 10.2 13.875Q9.875 14 9.5 14Q8.675 14 8.088 13.412Q7.5 12.825 7.5 12V11Q7.5 10.575 7.363 10.2Q7.225 9.825 7 9.5Q8.25 9.475 9.225 9.725Q10.075 9.95 10.775 10.462Q11.475 10.975 11.5 12Q11.5 12.225 11.463 12.412Q11.425 12.6 11.325 12.8Q11 12.55 10.675 12.35Q10.35 12.15 10 12Q10.425 12.325 10.975 13Q11.525 13.675 12 14.6Q12.5 13.375 13.25 12.188Q14 11 15 10Q14.425 10.4 13.9 10.85Q13.375 11.3 12.875 11.8Q12.7 11.525 12.6 11.188Q12.5 10.85 12.5 10.5Q12.5 9.45 13.225 8.725Q13.95 8 15 8H16Q16.575 8 16.95 7.85Q17.325 7.7 17.575 7.5Q17.85 7.275 18 7Q18.1 8.675 17.825 10Q17.6 11.125 16.975 12.062Q16.35 13 15 13Q14.625 13 14.288 12.9Q13.95 12.8 13.675 12.625Q13.5 13.1 13.275 13.887Q13.05 14.675 12.925 15.575Q13.875 15.75 14.6 16.225Q15.325 16.7 15.7 17.35Q16.975 16.475 17.738 15.075Q18.5 13.675 18.5 12H21.5Q21.5 13.975 20.75 15.7Q20 17.425 18.712 18.712Q17.425 20 15.7 20.75Q13.975 21.5 12 21.5Z"/>
    </Icon>
  )
});

export default IconMaterialCompostSharp;
