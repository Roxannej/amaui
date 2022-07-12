import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRefreshRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RefreshRoundedW700'
      short_name='Refresh'

      {...props}
    >
      <path d="M11.9 20.85Q8.225 20.85 5.638 18.262Q3.05 15.675 3.05 12Q3.05 8.325 5.638 5.737Q8.225 3.15 11.9 3.15Q13.85 3.15 15.588 3.937Q17.325 4.725 18.55 6.225V4.35Q18.55 3.85 18.9 3.5Q19.25 3.15 19.75 3.15Q20.25 3.15 20.6 3.5Q20.95 3.85 20.95 4.35V9.8Q20.95 10.45 20.488 10.912Q20.025 11.375 19.375 11.375H13.9Q13.4 11.375 13.05 11.037Q12.7 10.7 12.7 10.2Q12.7 9.7 13.05 9.35Q13.4 9 13.9 9H16.75Q15.95 7.75 14.675 7.025Q13.4 6.3 11.9 6.3Q9.525 6.3 7.863 7.963Q6.2 9.625 6.2 12Q6.2 14.375 7.863 16.038Q9.525 17.7 11.9 17.7Q13.425 17.7 14.725 16.925Q16.025 16.15 16.8 14.85Q17.025 14.475 17.438 14.238Q17.85 14 18.25 14Q19.225 14 19.688 14.662Q20.15 15.325 19.725 16.125Q18.575 18.275 16.488 19.562Q14.4 20.85 11.9 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialRefreshRoundedW700;
