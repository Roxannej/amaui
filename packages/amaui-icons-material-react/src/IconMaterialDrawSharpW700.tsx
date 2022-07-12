import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDrawSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawSharpW700'
      short_name='Draw'

      {...props}
    >
      <path d="M13.375 21.7V19.3H14.575Q15.675 19.3 16.525 18.9Q17.375 18.5 17.375 18Q17.375 17.725 17.087 17.45Q16.8 17.175 16.225 16.95L17.975 15.2Q18.825 15.7 19.3 16.375Q19.775 17.05 19.775 18Q19.775 19.75 18.138 20.725Q16.5 21.7 14.575 21.7ZM3.825 12.975Q2.925 12.55 2.488 11.95Q2.05 11.35 2.05 10.425Q2.05 9.325 2.8 8.512Q3.55 7.7 5.7 6.9Q7.175 6.325 7.613 6.05Q8.05 5.775 8.05 5.425Q8.05 5.1 7.6 4.862Q7.15 4.625 6.225 4.625Q5.425 4.625 5.013 4.825Q4.6 5.025 4.5 5.3H1.925Q1.925 4.025 3.125 3.125Q4.325 2.225 6.225 2.225Q8.125 2.225 9.275 3.087Q10.425 3.95 10.425 5.425Q10.425 6.625 9.675 7.438Q8.925 8.25 6.65 9.075Q5.175 9.6 4.8 9.9Q4.425 10.2 4.425 10.425Q4.425 10.625 4.713 10.812Q5 11 5.625 11.175ZM19.675 10.1 14.9 5.325 17.6 2.6 22.4 7.4ZM6.375 18.625H7.25L14.075 11.8L13.2 10.925L6.375 17.75ZM3.625 21.375V16.6L13.2 7.025L17.975 11.8L8.4 21.375ZM13.2 10.925 14.075 11.8Z"/>
    </Icon>
  )
});

export default IconMaterialDrawSharpW700;
