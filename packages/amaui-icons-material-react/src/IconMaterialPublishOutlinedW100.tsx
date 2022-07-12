import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublishOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishOutlinedW100'
      short_name='Publish'

      {...props}
    >
      <path d="M11.65 18.7V9.9L9.4 12.15L8.9 11.65L12 8.55L15.1 11.65L14.6 12.15L12.35 9.9V18.7ZM5.3 8.55V6.35Q5.3 5.7 5.725 5.275Q6.15 4.85 6.8 4.85H17.2Q17.85 4.85 18.275 5.275Q18.7 5.7 18.7 6.35V8.55H18V6.35Q18 6.05 17.75 5.8Q17.5 5.55 17.2 5.55H6.8Q6.5 5.55 6.25 5.8Q6 6.05 6 6.35V8.55Z"/>
    </Icon>
  )
});

export default IconMaterialPublishOutlinedW100;
