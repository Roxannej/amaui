import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveRoundedW700Filled'
      short_name='Archive'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V6.2Q2.15 5.675 2.325 5.213Q2.5 4.75 2.8 4.375L4.2 2.7Q4.55 2.325 5.025 2.087Q5.5 1.85 6 1.85H18Q18.5 1.85 18.975 2.087Q19.45 2.325 19.8 2.7L21.2 4.375Q21.5 4.75 21.675 5.213Q21.85 5.675 21.85 6.2V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM5.55 6H18.45L17.6 5H6.4ZM12 17.15Q12.3 17.15 12.575 17.05Q12.85 16.95 13.1 16.7L15.6 14.225Q15.95 13.875 15.95 13.375Q15.95 12.875 15.6 12.5Q15.25 12.125 14.725 12.125Q14.2 12.125 13.825 12.5L13.25 13.075V10.175Q13.25 9.675 12.875 9.3Q12.5 8.925 12 8.925Q11.5 8.925 11.125 9.3Q10.75 9.675 10.75 10.175V13.075L10.15 12.475Q9.775 12.1 9.262 12.113Q8.75 12.125 8.4 12.5Q8.05 12.875 8.062 13.387Q8.075 13.9 8.425 14.25L10.9 16.7Q11.15 16.95 11.425 17.05Q11.7 17.15 12 17.15Z"/>
    </Icon>
  )
});

export default IconMaterialArchiveRoundedW700Filled;