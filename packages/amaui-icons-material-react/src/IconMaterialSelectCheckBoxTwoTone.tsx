import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSelectCheckBoxTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectCheckBoxTwoTone'
      short_name='SelectCheckBox'

      {...props}
    >
      <path d="M11.725 16.7 6.175 11.15 7.725 9.575 11.725 13.55 21.25 4.05 22.825 5.625ZM5.4 21.625Q4.15 21.625 3.263 20.738Q2.375 19.85 2.375 18.6V5.4Q2.375 4.15 3.263 3.262Q4.15 2.375 5.4 2.375H18.6Q18.9 2.375 19.338 2.475Q19.775 2.575 20.05 2.75L17.4 5.4Q17.4 5.4 17.4 5.4Q17.4 5.4 17.4 5.4H5.4Q5.4 5.4 5.4 5.4Q5.4 5.4 5.4 5.4V18.6Q5.4 18.6 5.4 18.6Q5.4 18.6 5.4 18.6H18.6Q18.6 18.6 18.6 18.6Q18.6 18.6 18.6 18.6V12.3L21.625 9.275V18.6Q21.625 19.85 20.738 20.738Q19.85 21.625 18.6 21.625Z"/>
    </Icon>
  )
});

export default IconMaterialSelectCheckBoxTwoTone;
