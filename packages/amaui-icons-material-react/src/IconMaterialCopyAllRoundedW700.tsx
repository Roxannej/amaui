import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCopyAllRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllRoundedW700'
      short_name='CopyAll'

      {...props}
    >
      <path d="M10.15 18Q8.825 18 7.913 17.087Q7 16.175 7 14.85V4Q7 2.675 7.913 1.762Q8.825 0.85 10.15 0.85H18Q19.325 0.85 20.238 1.762Q21.15 2.675 21.15 4V14.85Q21.15 16.175 20.238 17.087Q19.325 18 18 18ZM10.15 14.85H18Q18 14.85 18 14.85Q18 14.85 18 14.85V4Q18 4 18 4Q18 4 18 4H10.15Q10.15 4 10.15 4Q10.15 4 10.15 4V14.85Q10.15 14.85 10.15 14.85Q10.15 14.85 10.15 14.85ZM1.85 15H5V13H1.85ZM1.85 11.5H5V9.5H1.85ZM10 23.15H12V20H10ZM1.85 18.5H5V16.5H1.85ZM5 23.15V20H1.85Q1.85 21.325 2.763 22.237Q3.675 23.15 5 23.15ZM6.5 23.15H8.5V20H6.5ZM13.5 23.15Q14.825 23.15 15.738 22.237Q16.65 21.325 16.65 20H13.5ZM1.85 8H5V4.85Q3.675 4.85 2.763 5.762Q1.85 6.675 1.85 8Z"/>
    </Icon>
  )
});

export default IconMaterialCopyAllRoundedW700;
