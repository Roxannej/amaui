import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerRoundedW700Filled'
      short_name='Scanner'

      {...props}
    >
      <path d="M14.575 10.85 3.65 6.9Q3.15 6.725 2.913 6.2Q2.675 5.675 2.875 5.15Q3.075 4.6 3.588 4.362Q4.1 4.125 4.65 4.325L19.45 9.75Q20.95 10.325 21.65 11.35Q22.35 12.375 22.35 13.65V18Q22.35 19.325 21.438 20.237Q20.525 21.15 19.2 21.15H4.8Q3.475 21.15 2.562 20.237Q1.65 19.325 1.65 18V14Q1.65 12.675 2.562 11.762Q3.475 10.85 4.8 10.85ZM10.8 17H17.2Q17.625 17 17.913 16.712Q18.2 16.425 18.2 16Q18.2 15.575 17.913 15.287Q17.625 15 17.2 15H10.8Q10.375 15 10.088 15.287Q9.8 15.575 9.8 16Q9.8 16.425 10.088 16.712Q10.375 17 10.8 17ZM6.8 17Q7.225 17 7.513 16.712Q7.8 16.425 7.8 16Q7.8 15.575 7.513 15.287Q7.225 15 6.8 15Q6.375 15 6.088 15.287Q5.8 15.575 5.8 16Q5.8 16.425 6.088 16.712Q6.375 17 6.8 17Z"/>
    </Icon>
  )
});

export default IconMaterialScannerRoundedW700Filled;
