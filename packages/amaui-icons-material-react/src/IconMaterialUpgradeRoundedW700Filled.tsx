import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpgradeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeRoundedW700Filled'
      short_name='Upgrade'

      {...props}
    >
      <path d="M12 16Q11.35 16 10.888 15.537Q10.425 15.075 10.425 14.425V8.6L9.5 9.525Q9.05 9.975 8.4 9.975Q7.75 9.975 7.3 9.525Q6.85 9.075 6.85 8.425Q6.85 7.775 7.3 7.325L10.9 3.725Q11.15 3.475 11.425 3.375Q11.7 3.275 12 3.275Q12.3 3.275 12.575 3.375Q12.85 3.475 13.1 3.725L16.7 7.325Q17.15 7.775 17.15 8.425Q17.15 9.075 16.7 9.525Q16.25 9.975 15.6 9.975Q14.95 9.975 14.5 9.525L13.575 8.6V14.425Q13.575 15.075 13.113 15.537Q12.65 16 12 16ZM8 21.15Q7.35 21.15 6.888 20.688Q6.425 20.225 6.425 19.575Q6.425 18.925 6.888 18.462Q7.35 18 8 18H16Q16.65 18 17.113 18.462Q17.575 18.925 17.575 19.575Q17.575 20.225 17.113 20.688Q16.65 21.15 16 21.15Z"/>
    </Icon>
  )
});

export default IconMaterialUpgradeRoundedW700Filled;
