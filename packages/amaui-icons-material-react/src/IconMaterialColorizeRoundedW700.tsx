import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialColorizeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeRoundedW700'
      short_name='Colorize'

      {...props}
    >
      <path d="M3.725 21.85Q3.075 21.85 2.612 21.388Q2.15 20.925 2.15 20.275V16.55Q2.15 16.225 2.263 15.95Q2.375 15.675 2.625 15.425L10.75 7.3L10.575 7.125Q10.05 6.6 10.075 5.85Q10.1 5.1 10.625 4.575Q11.15 4.05 11.925 4.05Q12.7 4.05 13.25 4.6L13.85 5.2L16.325 2.675Q16.875 2.125 17.638 2.15Q18.4 2.175 18.95 2.725L21.275 5.025Q21.825 5.575 21.85 6.35Q21.875 7.125 21.325 7.675L18.8 10.15L19.45 10.8Q19.95 11.325 19.95 12.087Q19.95 12.85 19.425 13.375Q18.9 13.9 18.15 13.912Q17.4 13.925 16.875 13.4L16.7 13.25L8.575 21.375Q8.325 21.625 8.05 21.738Q7.775 21.85 7.45 21.85ZM5.3 18.7H6.825L14.825 10.65L13.35 9.175L5.3 17.175ZM16.55 8.475 18.7 6.35 17.65 5.3 15.5 7.425ZM16.55 8.475 15.5 7.425 16.55 8.475Z"/>
    </Icon>
  )
});

export default IconMaterialColorizeRoundedW700;
