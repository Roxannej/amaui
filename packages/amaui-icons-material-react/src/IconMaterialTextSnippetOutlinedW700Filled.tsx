import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextSnippetOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetOutlinedW700Filled'
      short_name='TextSnippet'

      {...props}
    >
      <path d="M5.3 21.85Q4 21.85 3.075 20.925Q2.15 20 2.15 18.7V5.3Q2.15 4 3.075 3.075Q4 2.15 5.3 2.15H15.775L21.85 8.225V18.7Q21.85 20 20.925 20.925Q20 21.85 18.7 21.85ZM6.725 16.8H17.275V14.625H6.725ZM6.725 13.2H17.275V11H6.725ZM6.725 9.575H13.8V7.375H6.725Z"/>
    </Icon>
  )
});

export default IconMaterialTextSnippetOutlinedW700Filled;