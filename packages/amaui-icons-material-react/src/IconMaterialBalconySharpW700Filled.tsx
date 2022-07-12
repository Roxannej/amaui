import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBalconySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconySharpW700Filled'
      short_name='Balcony'

      {...props}
    >
      <path d="M6.85 12.95V10.2H9.625V12.95ZM14.375 12.95V10.2H17.15V12.95ZM1.85 22.95V14.2H2.85V10.2Q2.85 8.475 3.525 6.825Q4.2 5.175 5.4 3.887Q6.6 2.6 8.288 1.825Q9.975 1.05 12 1.05Q14.025 1.05 15.713 1.825Q17.4 2.6 18.6 3.887Q19.8 5.175 20.475 6.825Q21.15 8.475 21.15 10.2V14.2H22.15V22.95ZM4.625 20.2H6.225V16.95H4.625ZM9 20.2H10.625V16.95H9ZM5.625 14.2H10.625V3.95Q8.675 4.35 7.15 6.062Q5.625 7.775 5.625 10.2ZM13.375 14.2H18.375V10.2Q18.375 7.775 16.85 6.062Q15.325 4.35 13.375 3.95ZM13.375 20.2H15V16.95H13.375ZM17.775 20.2H19.375V16.95H17.775Z"/>
    </Icon>
  )
});

export default IconMaterialBalconySharpW700Filled;
