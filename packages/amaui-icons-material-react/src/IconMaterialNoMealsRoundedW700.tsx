import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMealsRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsRoundedW700'
      short_name='NoMeals'

      {...props}
    >
      <path d="M20.875 23.825 18.05 21H20.525Q20.525 21.575 20.125 21.987Q19.725 22.4 19.15 22.4Q18.575 22.4 18.175 21.987Q17.775 21.575 17.775 21V20.725L10.125 13.075Q9.925 13.15 9.75 13.2Q9.575 13.25 9.375 13.3V21Q9.375 21.575 8.975 21.975Q8.575 22.375 8 22.375Q7.425 22.375 7.025 21.975Q6.625 21.575 6.625 21V13.3Q5.175 12.95 4.013 11.65Q2.85 10.35 2.85 8.625V5.8L0.55 3.5L2.225 1.825L22.55 22.15ZM20.525 16.8 17.75 14 14.775 11.025V7Q14.775 4.725 16.475 3.175Q18.175 1.625 20.525 1.625ZM13.15 9.4 10.375 6.65V3Q10.375 2.425 10.788 2.025Q11.2 1.625 11.775 1.625Q12.35 1.625 12.75 2.025Q13.15 2.425 13.15 3ZM6 9ZM9.375 5.65 6.625 2.875V2.625Q6.8 2.1 7.2 1.862Q7.6 1.625 8 1.625Q8.575 1.625 8.975 2.025Q9.375 2.425 9.375 3ZM5.625 1.875 5.35 1.625Q5.475 1.625 5.55 1.688Q5.625 1.75 5.625 1.875Z"/>
    </Icon>
  )
});

export default IconMaterialNoMealsRoundedW700;