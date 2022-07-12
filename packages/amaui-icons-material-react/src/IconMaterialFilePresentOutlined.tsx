import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilePresentOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentOutlined'
      short_name='FilePresent'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H15L20 7V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V8H14V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20ZM12 19Q13.675 19 14.838 17.825Q16 16.65 16 15V11H14V15Q14 15.825 13.425 16.413Q12.85 17 12 17Q11.175 17 10.588 16.413Q10 15.825 10 15V9.5Q10 9.275 10.15 9.137Q10.3 9 10.5 9Q10.725 9 10.863 9.137Q11 9.275 11 9.5V15H13V9.5Q13 8.45 12.275 7.725Q11.55 7 10.5 7Q9.45 7 8.725 7.725Q8 8.45 8 9.5V15Q8 16.65 9.175 17.825Q10.35 19 12 19ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialFilePresentOutlined;