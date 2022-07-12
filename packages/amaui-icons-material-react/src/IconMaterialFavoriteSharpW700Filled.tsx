import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFavoriteSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteSharpW700Filled'
      short_name='Favorite'

      {...props}
    >
      <path d="M11.975 22.15 9.95 20.325Q5.925 16.7 3.525 14Q1.125 11.3 1.125 8.15Q1.125 5.425 2.938 3.6Q4.75 1.775 7.475 1.775Q8.75 1.775 9.9 2.225Q11.05 2.675 11.975 3.55Q12.9 2.675 14.05 2.225Q15.2 1.775 16.475 1.775Q19.2 1.775 21.038 3.6Q22.875 5.425 22.875 8.15Q22.875 11.3 20.45 14Q18.025 16.7 14 20.325Z"/>
    </Icon>
  )
});

export default IconMaterialFavoriteSharpW700Filled;
