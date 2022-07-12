import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifBoxOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBoxOutlinedFilled'
      short_name='GifBox'

      {...props}
    >
      <path d="M8.5 14H9.5Q9.925 14 10.213 13.712Q10.5 13.425 10.5 13V12H9.5V13Q9.5 13 9.5 13Q9.5 13 9.5 13H8.5Q8.5 13 8.5 13Q8.5 13 8.5 13V11Q8.5 11 8.5 11Q8.5 11 8.5 11H10.5Q10.5 10.575 10.213 10.287Q9.925 10 9.5 10H8.5Q8.075 10 7.788 10.287Q7.5 10.575 7.5 11V13Q7.5 13.425 7.788 13.712Q8.075 14 8.5 14ZM11.5 14H12.5V10H11.5ZM13.5 14H14.5V12.5H16V11.5H14.5V11H16.5V10H13.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialGifBoxOutlinedFilled;
