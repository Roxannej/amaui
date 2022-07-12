import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFavoriteOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteOutlinedW700'
      short_name='Favorite'

      {...props}
    >
      <path d="M11.975 22.15 9.95 20.325Q5.925 16.7 3.525 14Q1.125 11.3 1.125 8.15Q1.125 5.425 2.938 3.6Q4.75 1.775 7.475 1.775Q8.75 1.775 9.9 2.225Q11.05 2.675 11.975 3.55Q12.9 2.675 14.05 2.225Q15.2 1.775 16.475 1.775Q19.2 1.775 21.038 3.6Q22.875 5.425 22.875 8.15Q22.875 11.3 20.45 14Q18.025 16.7 14 20.325ZM12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425ZM11.975 17.925Q15.5 14.725 17.613 12.488Q19.725 10.25 19.725 8.15Q19.725 6.75 18.8 5.838Q17.875 4.925 16.475 4.925Q15.4 4.925 14.45 5.588Q13.5 6.25 13.125 7.275H10.85Q10.475 6.25 9.513 5.588Q8.55 4.925 7.475 4.925Q6.125 4.925 5.213 5.838Q4.3 6.75 4.3 8.15Q4.3 10.25 6.375 12.488Q8.45 14.725 11.975 17.925Z"/>
    </Icon>
  )
});

export default IconMaterialFavoriteOutlinedW700;