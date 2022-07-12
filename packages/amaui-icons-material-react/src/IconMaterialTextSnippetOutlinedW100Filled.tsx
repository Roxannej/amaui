import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextSnippetOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetOutlinedW100Filled'
      short_name='TextSnippet'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H14.725L19.7 9.275V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM7.65 15.7H16.35V15H7.65ZM7.65 12.35H16.35V11.65H7.65ZM7.65 9H13V8.3H7.65Z"/>
    </Icon>
  )
});

export default IconMaterialTextSnippetOutlinedW100Filled;