import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibleRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleRoundedW700'
      short_name='Accessible'

      {...props}
    >
      <path d="M12.075 5.55Q11.075 5.55 10.388 4.85Q9.7 4.15 9.7 3.15Q9.7 2.15 10.388 1.462Q11.075 0.775 12.075 0.775Q13.075 0.775 13.763 1.462Q14.45 2.15 14.45 3.15Q14.45 4.15 13.763 4.85Q13.075 5.55 12.075 5.55ZM18.2 22Q17.625 22 17.212 21.6Q16.8 21.2 16.8 20.625V17Q16.8 17 16.8 17Q16.8 17 16.8 17H12.95Q11.625 17 10.713 16.087Q9.8 15.175 9.8 13.85V8.8Q9.8 7.85 10.463 7.2Q11.125 6.55 12.075 6.55Q12.575 6.55 12.975 6.725Q13.375 6.9 13.875 7.4Q14.95 8.475 16.062 9.087Q17.175 9.7 18.425 9.95Q18.85 10.05 19.138 10.375Q19.425 10.7 19.425 11.125Q19.425 11.7 19.013 12.062Q18.6 12.425 18.075 12.3Q17.125 12.1 16.212 11.738Q15.3 11.375 14.575 10.9V13.925H16.8Q18 13.925 18.788 14.712Q19.575 15.5 19.575 16.7V20.625Q19.575 21.2 19.175 21.6Q18.775 22 18.2 22ZM9.8 22.375Q7.575 22.375 6 20.8Q4.425 19.225 4.425 17Q4.425 15.075 5.675 13.55Q6.925 12.025 8.8 11.725V14.575Q8.05 14.925 7.625 15.575Q7.2 16.225 7.2 17Q7.2 18.1 7.95 18.863Q8.7 19.625 9.8 19.625Q10.575 19.625 11.225 19.188Q11.875 18.75 12.225 18H15.1Q14.8 19.875 13.263 21.125Q11.725 22.375 9.8 22.375Z"/>
    </Icon>
  )
});

export default IconMaterialAccessibleRoundedW700;