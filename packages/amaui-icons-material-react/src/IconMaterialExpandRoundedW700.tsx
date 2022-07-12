import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandRoundedW700'
      short_name='Expand'

      {...props}
    >
      <path d="M5 23.525Q4.35 23.525 3.888 23.062Q3.425 22.6 3.425 21.95Q3.425 21.3 3.888 20.837Q4.35 20.375 5 20.375H19Q19.65 20.375 20.113 20.837Q20.575 21.3 20.575 21.95Q20.575 22.6 20.113 23.062Q19.65 23.525 19 23.525ZM5 3.625Q4.35 3.625 3.888 3.162Q3.425 2.7 3.425 2.05Q3.425 1.4 3.888 0.937Q4.35 0.475 5 0.475H19Q19.65 0.475 20.113 0.937Q20.575 1.4 20.575 2.05Q20.575 2.7 20.113 3.162Q19.65 3.625 19 3.625ZM12 18.725Q11.7 18.725 11.413 18.613Q11.125 18.5 10.9 18.275L8.3 15.675Q7.9 15.275 7.9 14.738Q7.9 14.2 8.325 13.775Q8.725 13.375 9.288 13.375Q9.85 13.375 10.25 13.775L10.625 14.125V9.875L10.225 10.25Q9.825 10.65 9.288 10.65Q8.75 10.65 8.325 10.225Q7.925 9.825 7.925 9.262Q7.925 8.7 8.325 8.3L10.9 5.725Q11.125 5.5 11.413 5.387Q11.7 5.275 12 5.275Q12.3 5.275 12.588 5.387Q12.875 5.5 13.1 5.725L15.7 8.325Q16.1 8.725 16.1 9.262Q16.1 9.8 15.675 10.225Q15.275 10.625 14.713 10.625Q14.15 10.625 13.75 10.225L13.375 9.875V14.125L13.775 13.75Q14.175 13.35 14.713 13.35Q15.25 13.35 15.675 13.775Q16.075 14.175 16.075 14.737Q16.075 15.3 15.675 15.7L13.1 18.275Q12.875 18.5 12.588 18.613Q12.3 18.725 12 18.725Z"/>
    </Icon>
  )
});

export default IconMaterialExpandRoundedW700;
