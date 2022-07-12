import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWysiwygOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygOutlinedW100'
      short_name='Wysiwyg'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V7H5V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19ZM7 11.35V10.65H17V11.35ZM7 15.35V14.65H13V15.35Z"/>
    </Icon>
  )
});

export default IconMaterialWysiwygOutlinedW100;
