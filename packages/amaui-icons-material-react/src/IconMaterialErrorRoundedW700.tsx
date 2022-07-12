import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialErrorRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorRoundedW700'
      short_name='Error'

      {...props}
    >
      <path d="M12 13.05Q12.65 13.05 13.113 12.587Q13.575 12.125 13.575 11.475V8.025Q13.575 7.375 13.113 6.925Q12.65 6.475 12 6.475Q11.35 6.475 10.888 6.937Q10.425 7.4 10.425 8.05V11.5Q10.425 12.15 10.888 12.6Q11.35 13.05 12 13.05ZM12 17.85Q12.725 17.85 13.225 17.35Q13.725 16.85 13.725 16.125Q13.725 15.4 13.225 14.887Q12.725 14.375 12 14.375Q11.275 14.375 10.775 14.887Q10.275 15.4 10.275 16.125Q10.275 16.85 10.775 17.35Q11.275 17.85 12 17.85ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 19.7Q15.2 19.7 17.45 17.462Q19.7 15.225 19.7 12Q19.7 8.775 17.45 6.537Q15.2 4.3 12 4.3Q8.8 4.3 6.55 6.537Q4.3 8.775 4.3 12Q4.3 15.225 6.55 17.462Q8.8 19.7 12 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialErrorRoundedW700;
