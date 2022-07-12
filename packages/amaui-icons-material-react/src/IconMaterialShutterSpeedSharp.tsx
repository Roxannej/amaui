import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShutterSpeedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedSharp'
      short_name='ShutterSpeed'

      {...props}
    >
      <path d="M9 3V1H15V3ZM12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.625 19.35Q4.4 18.125 3.7 16.488Q3 14.85 3 13Q3 11.15 3.712 9.512Q4.425 7.875 5.65 6.65Q6.875 5.425 8.512 4.713Q10.15 4 12 4Q13.575 4 15 4.525Q16.425 5.05 17.6 6L19.05 4.55L20.45 5.95L19.05 7.4Q19.95 8.575 20.475 10Q21 11.425 21 13Q21 14.85 20.3 16.488Q19.6 18.125 18.375 19.35Q17.15 20.575 15.513 21.288Q13.875 22 12 22ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13ZM12 11H18.7Q18.25 9.45 17.163 8.275Q16.075 7.1 14.6 6.5ZM10.25 12 13.6 6.2Q12.125 5.825 10.562 6.137Q9 6.45 7.65 7.5ZM5.1 14H10.25L6.9 8.2Q5.85 9.375 5.338 10.863Q4.825 12.35 5.1 14ZM9.4 19.5 12 15H5.3Q5.75 16.55 6.838 17.725Q7.925 18.9 9.4 19.5ZM10.4 19.8Q12.05 20.225 13.6 19.837Q15.15 19.45 16.35 18.5L13.75 14ZM17.1 17.8Q18.2 16.6 18.688 15.113Q19.175 13.625 18.9 12H13.75Z"/>
    </Icon>
  )
});

export default IconMaterialShutterSpeedSharp;
