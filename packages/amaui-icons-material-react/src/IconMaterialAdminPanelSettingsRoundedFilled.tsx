import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdminPanelSettingsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminPanelSettingsRoundedFilled'
      short_name='AdminPanelSettings'

      {...props}
    >
      <path d="M17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17ZM17 20Q17.775 20 18.425 19.637Q19.075 19.275 19.475 18.675Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.525 18.675Q14.925 19.275 15.575 19.637Q16.225 20 17 20ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM12 21.925Q11.875 21.925 11.762 21.925Q11.65 21.925 11.525 21.875Q8.25 20.875 6.125 17.825Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V10.675Q19.275 10.35 18.538 10.175Q17.8 10 17 10Q14.1 10 12.05 12.05Q10 14.1 10 17Q10 18.425 10.5 19.663Q11 20.9 12.025 21.925Q12.025 21.925 12.012 21.925Q12 21.925 12 21.925Z"/>
    </Icon>
  );
});

export default IconMaterialAdminPanelSettingsRoundedFilled;