import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHistorySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistorySharpW700Filled'
      short_name='History'

      {...props}
    >
      <path d="M13.375 21.85Q11.675 21.85 10 21.238Q8.325 20.625 6.975 19.425L9.2 17.2Q10.1 17.925 11.163 18.312Q12.225 18.7 13.375 18.7Q16.175 18.7 18.125 16.75Q20.075 14.8 20.075 12Q20.075 9.2 18.125 7.25Q16.175 5.3 13.375 5.3Q10.6 5.3 8.65 7.25Q6.7 9.2 6.7 12.05L8.15 10.55L9.875 12.25L5.125 17L0.325 12.25L2.05 10.55L3.55 12.05Q3.55 10 4.325 8.2Q5.1 6.4 6.425 5.05Q7.75 3.7 9.55 2.925Q11.35 2.15 13.375 2.15Q15.4 2.15 17.188 2.925Q18.975 3.7 20.325 5.05Q21.675 6.4 22.45 8.188Q23.225 9.975 23.225 12Q23.225 14.025 22.45 15.812Q21.675 17.6 20.337 18.95Q19 20.3 17.2 21.075Q15.4 21.85 13.375 21.85ZM16 16.4 12.2 12.6V7H14.575V11.6L17.675 14.7Z"/>
    </Icon>
  )
});

export default IconMaterialHistorySharpW700Filled;
