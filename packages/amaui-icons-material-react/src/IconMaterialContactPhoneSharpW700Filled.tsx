import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPhoneSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneSharpW700Filled'
      short_name='ContactPhone'

      {...props}
    >
      <path d="M0 21.375V2.625H24V21.375ZM9.7 13.8Q11.05 13.8 11.963 12.887Q12.875 11.975 12.875 10.625Q12.875 9.275 11.963 8.35Q11.05 7.425 9.7 7.425Q8.35 7.425 7.425 8.35Q6.5 9.275 6.5 10.625Q6.5 11.975 7.425 12.887Q8.35 13.8 9.7 13.8ZM18.5 18 20.5 16 19 14H17.35Q17.2 13.55 17.1 13.037Q17 12.525 17 12Q17 11.475 17.1 10.988Q17.2 10.5 17.35 10H19L20.5 8L18.5 6Q17.15 7.05 16.325 8.662Q15.5 10.275 15.5 12Q15.5 13.725 16.325 15.337Q17.15 16.95 18.5 18ZM2.875 18.625H16.675Q15.625 16.75 13.8 15.688Q11.975 14.625 9.775 14.625Q7.625 14.625 5.775 15.688Q3.925 16.75 2.875 18.625Z"/>
    </Icon>
  )
});

export default IconMaterialContactPhoneSharpW700Filled;
