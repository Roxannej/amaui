import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataSaverOnOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataSaverOnOutlinedFilled'
      short_name='DataSaverOn'

      {...props}
    >
      <path d="M11 16V13H8V11H11V8H13V11H16V13H13V16ZM21.15 16.05 18.55 14.55Q18.775 13.95 18.888 13.312Q19 12.675 19 12Q19 9.325 17.288 7.362Q15.575 5.4 13 5.05V2.05Q16.8 2.425 19.4 5.25Q22 8.075 22 12Q22 13.1 21.8 14.125Q21.6 15.15 21.15 16.05ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 8.075 4.6 5.25Q7.2 2.425 11 2.05V5.05Q8.425 5.4 6.713 7.362Q5 9.325 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19Q13.65 19 15.088 18.3Q16.525 17.6 17.5 16.4L20.1 17.9Q18.75 19.775 16.625 20.887Q14.5 22 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialDataSaverOnOutlinedFilled;
