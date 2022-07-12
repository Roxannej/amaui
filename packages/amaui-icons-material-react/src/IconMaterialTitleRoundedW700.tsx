import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTitleRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleRoundedW700'
      short_name='Title'

      {...props}
    >
      <path d="M12 20.775Q11.125 20.775 10.525 20.175Q9.925 19.575 9.925 18.7V7.375H6.5Q5.625 7.375 5.025 6.775Q4.425 6.175 4.425 5.3Q4.425 4.425 5.025 3.825Q5.625 3.225 6.5 3.225H17.5Q18.375 3.225 18.975 3.825Q19.575 4.425 19.575 5.3Q19.575 6.175 18.975 6.775Q18.375 7.375 17.5 7.375H14.075V18.7Q14.075 19.575 13.475 20.175Q12.875 20.775 12 20.775Z"/>
    </Icon>
  )
});

export default IconMaterialTitleRoundedW700;