import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWcOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcOutlinedW700Filled'
      short_name='Wc'

      {...props}
    >
      <path d="M4.725 22.375V14.5H3.225V9Q3.225 8.175 3.812 7.587Q4.4 7 5.225 7H9Q9.825 7 10.413 7.587Q11 8.175 11 9V14.5H9.5V22.375ZM15 22.375V16.775H11.85L14.55 8.625Q14.8 7.875 15.438 7.438Q16.075 7 16.875 7Q17.675 7 18.325 7.438Q18.975 7.875 19.225 8.625L21.925 16.775H18.775V22.375ZM7.125 6.375Q6.125 6.375 5.425 5.688Q4.725 5 4.725 4Q4.725 3 5.425 2.312Q6.125 1.625 7.125 1.625Q8.125 1.625 8.812 2.312Q9.5 3 9.5 4Q9.5 5 8.812 5.688Q8.125 6.375 7.125 6.375ZM16.875 6.375Q15.875 6.375 15.188 5.688Q14.5 5 14.5 4Q14.5 3 15.188 2.312Q15.875 1.625 16.875 1.625Q17.875 1.625 18.575 2.312Q19.275 3 19.275 4Q19.275 5 18.575 5.688Q17.875 6.375 16.875 6.375Z"/>
    </Icon>
  )
});

export default IconMaterialWcOutlinedW700Filled;
