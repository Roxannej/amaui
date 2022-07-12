import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareRoundedW700Filled'
      short_name='Compare'

      {...props}
    >
      <path d="M10.8 23.775Q10.3 23.775 9.963 23.425Q9.625 23.075 9.625 22.575V21.85H5.3Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H9.625V1.425Q9.625 0.925 9.963 0.575Q10.3 0.225 10.8 0.225Q11.3 0.225 11.65 0.575Q12 0.925 12 1.425V22.575Q12 23.075 11.65 23.425Q11.3 23.775 10.8 23.775ZM5.275 17.7H9.625V12.45ZM14.375 21.85V12.45L18.7 17.625V5.3Q18.7 5.3 18.7 5.3Q18.7 5.3 18.7 5.3H14.375V2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialCompareRoundedW700Filled;
