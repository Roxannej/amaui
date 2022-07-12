import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFavoriteRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteRoundedW700Filled'
      short_name='Favorite'

      {...props}
    >
      <path d="M9.875 20.25 8.075 18.6Q5.475 16.25 3.313 13.775Q1.15 11.3 1.15 8.15Q1.15 5.425 2.95 3.6Q4.75 1.775 7.475 1.775Q8.75 1.775 9.9 2.225Q11.05 2.675 11.975 3.55Q12.9 2.675 14.05 2.225Q15.2 1.775 16.475 1.775Q19.2 1.775 21.038 3.6Q22.875 5.425 22.875 8.15Q22.875 11.3 20.688 13.787Q18.5 16.275 15.85 18.65L14.1 20.25Q13.2 21.075 11.988 21.075Q10.775 21.075 9.875 20.25Z"/>
    </Icon>
  )
});

export default IconMaterialFavoriteRoundedW700Filled;