import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBoxRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxRoundedW700Filled'
      short_name='AddBox'

      {...props}
    >
      <path d="M12 17.2Q12.575 17.2 12.975 16.788Q13.375 16.375 13.375 15.8V13.375H15.8Q16.375 13.375 16.788 12.975Q17.2 12.575 17.2 12Q17.2 11.425 16.788 11.025Q16.375 10.625 15.8 10.625H13.375V8.2Q13.375 7.625 12.975 7.213Q12.575 6.8 12 6.8Q11.425 6.8 11.025 7.213Q10.625 7.625 10.625 8.2V10.625H8.2Q7.625 10.625 7.213 11.025Q6.8 11.425 6.8 12Q6.8 12.575 7.213 12.975Q7.625 13.375 8.2 13.375H10.625V15.8Q10.625 16.375 11.025 16.788Q11.425 17.2 12 17.2ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialAddBoxRoundedW700Filled;
