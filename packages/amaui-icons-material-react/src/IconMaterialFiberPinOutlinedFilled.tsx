import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFiberPinOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinOutlinedFilled'
      short_name='FiberPin'

      {...props}
    >
      <path d="M14 15H15.25V11.5L17.8 15H19V9H17.75V12.5L15.25 9H14ZM11.25 15H12.75V9H11.25ZM5 15H6.5V13H9Q9.425 13 9.713 12.712Q10 12.425 10 12V10Q10 9.575 9.713 9.287Q9.425 9 9 9H5ZM6.5 11.5V10.5H8.5Q8.5 10.5 8.5 10.5Q8.5 10.5 8.5 10.5V11.5Q8.5 11.5 8.5 11.5Q8.5 11.5 8.5 11.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialFiberPinOutlinedFilled;
