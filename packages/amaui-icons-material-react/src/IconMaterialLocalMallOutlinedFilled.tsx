import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalMallOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallOutlinedFilled'
      short_name='LocalMall'

      {...props}
    >
      <path d="M9 6H15Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM12 14Q14.075 14 15.538 12.537Q17 11.075 17 9H15Q15 10.25 14.125 11.125Q13.25 12 12 12Q10.75 12 9.875 11.125Q9 10.25 9 9H7Q7 11.075 8.463 12.537Q9.925 14 12 14ZM19 22H5Q4.175 22 3.587 21.413Q3 20.825 3 20V8Q3 7.175 3.587 6.588Q4.175 6 5 6H7Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6H19Q19.825 6 20.413 6.588Q21 7.175 21 8V20Q21 20.825 20.413 21.413Q19.825 22 19 22Z"/>
    </Icon>
  )
});

export default IconMaterialLocalMallOutlinedFilled;
