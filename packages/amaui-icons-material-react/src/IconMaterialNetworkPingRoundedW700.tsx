import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkPingRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPingRoundedW700'
      short_name='NetworkPing'

      {...props}
    >
      <path d="M3.925 19.35Q3.275 19.35 2.812 18.888Q2.35 18.425 2.35 17.775Q2.35 17.125 2.812 16.663Q3.275 16.2 3.925 16.2H9.25L0.975 7.9Q0.525 7.45 0.525 6.8Q0.525 6.15 0.975 5.7Q1.425 5.25 2.075 5.25Q2.725 5.25 3.175 5.7L12 14.475L17.5 8.975Q17.425 8.725 17.388 8.488Q17.35 8.25 17.35 7.975Q17.35 6.6 18.312 5.625Q19.275 4.65 20.65 4.65Q22.025 4.65 22.988 5.625Q23.95 6.6 23.95 7.975Q23.95 9.35 22.988 10.312Q22.025 11.275 20.65 11.275Q20.425 11.275 20.2 11.237Q19.975 11.2 19.775 11.15L14.75 16.2H20.075Q20.725 16.2 21.188 16.663Q21.65 17.125 21.65 17.775Q21.65 18.425 21.188 18.888Q20.725 19.35 20.075 19.35Z"/>
    </Icon>
  )
});

export default IconMaterialNetworkPingRoundedW700;