import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBuildRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildRoundedW700Filled'
      short_name='Build'

      {...props}
    >
      <path d="M18.25 21.725Q17.6 21.725 17.013 21.462Q16.425 21.2 15.95 20.725L10.525 15.3Q10.1 15.425 9.675 15.5Q9.25 15.575 8.625 15.575Q5.825 15.575 3.838 13.587Q1.85 11.6 1.85 8.8Q1.85 7.85 2.188 6.8Q2.525 5.75 3.025 5.025L6.825 8.825L8.625 7.025L4.825 3.225Q5.475 2.775 6.575 2.412Q7.675 2.05 8.625 2.05Q11.425 2.05 13.4 4.025Q15.375 6 15.375 8.8Q15.375 9.3 15.312 9.762Q15.25 10.225 15.1 10.725L20.55 16.15Q21.025 16.625 21.275 17.212Q21.525 17.8 21.525 18.45Q21.525 19.1 21.288 19.688Q21.05 20.275 20.575 20.75Q20.1 21.225 19.5 21.475Q18.9 21.725 18.25 21.725Z"/>
    </Icon>
  )
});

export default IconMaterialBuildRoundedW700Filled;