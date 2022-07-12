import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrassOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GrassOutlinedW700Filled'
      short_name='Grass'

      {...props}
    >
      <path d="M0.475 21.875V18.725H6.8Q6.225 16.45 4.562 14.7Q2.9 12.95 0.475 12.3Q1.05 12.175 1.6 12.087Q2.15 12 2.775 12Q6.775 12 9.387 14.787Q12 17.575 12 21.875ZM14 21.875Q14 20.725 13.762 19.475Q13.525 18.225 13 17.025Q14.175 14.8 16.337 13.4Q18.5 12 21.225 12Q21.85 12 22.4 12.087Q22.95 12.175 23.525 12.3Q21.25 12.95 19.525 14.762Q17.8 16.575 17.225 18.725H23.525V21.875ZM12.05 15.2Q11.9 13.25 12.475 11.462Q13.05 9.675 14.238 8.3Q15.425 6.925 17.125 6.062Q18.825 5.2 20.925 5.1Q19.325 6.1 18.05 7.762Q16.775 9.425 16.1 11.25Q14.825 11.875 13.725 12.938Q12.625 14 12.05 15.2ZM10.125 12.925Q9.725 12.575 9.263 12.225Q8.8 11.875 8.45 11.65Q8.475 11.4 8.512 11.05Q8.55 10.7 8.55 10.5Q8.55 8.3 7.863 6.337Q7.175 4.375 5.9 2.775Q7.775 3.55 9.288 5.1Q10.8 6.65 11.55 8.9Q11.025 9.775 10.637 10.825Q10.25 11.875 10.125 12.925Z"/>
    </Icon>
  )
});

export default IconMaterialGrassOutlinedW700Filled;
