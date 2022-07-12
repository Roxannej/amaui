import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCribOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribOutlinedW700Filled'
      short_name='Crib'

      {...props}
    >
      <path d="M12 19.7Q12.3 19.7 12.6 19.675Q12.9 19.65 13.225 19.6V16.025H10.775V19.6Q11.1 19.65 11.4 19.675Q11.7 19.7 12 19.7ZM12 22.85Q9.875 22.85 7.713 21.938Q5.55 21.025 3.825 19.35L6.075 17.125Q6.425 17.475 6.812 17.775Q7.2 18.075 7.625 18.35V16.025H6.275Q4.95 16.025 4.037 15.112Q3.125 14.2 3.125 12.875V7.375Q3.125 5.35 4.55 3.912Q5.975 2.475 8 2.475H12.65V7.475H17.725Q19.05 7.475 19.962 8.387Q20.875 9.3 20.875 10.625V12.875Q20.875 14.2 19.962 15.112Q19.05 16.025 17.725 16.025H16.375V18.35Q16.8 18.075 17.188 17.775Q17.575 17.475 17.925 17.125L20.175 19.35Q18.45 21.025 16.288 21.938Q14.125 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialCribOutlinedW700Filled;