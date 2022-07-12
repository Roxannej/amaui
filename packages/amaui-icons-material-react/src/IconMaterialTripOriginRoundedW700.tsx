import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTripOriginRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripOriginRoundedW700'
      short_name='TripOrigin'

      {...props}
    >
      <path d="M12 22.85Q9.775 22.85 7.8 21.988Q5.825 21.125 4.35 19.65Q2.875 18.175 2.013 16.2Q1.15 14.225 1.15 12Q1.15 9.775 2.013 7.8Q2.875 5.825 4.35 4.35Q5.825 2.875 7.8 2.012Q9.775 1.15 12 1.15Q14.225 1.15 16.2 2.012Q18.175 2.875 19.65 4.35Q21.125 5.825 21.988 7.8Q22.85 9.775 22.85 12Q22.85 14.225 21.988 16.2Q21.125 18.175 19.65 19.65Q18.175 21.125 16.2 21.988Q14.225 22.85 12 22.85ZM12 17.3Q14.2 17.3 15.75 15.75Q17.3 14.2 17.3 12Q17.3 9.8 15.75 8.25Q14.2 6.7 12 6.7Q9.8 6.7 8.25 8.25Q6.7 9.8 6.7 12Q6.7 14.2 8.25 15.75Q9.8 17.3 12 17.3Z"/>
    </Icon>
  )
});

export default IconMaterialTripOriginRoundedW700;