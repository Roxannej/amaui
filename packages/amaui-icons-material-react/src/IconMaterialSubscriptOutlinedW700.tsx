import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptOutlinedW700'
      short_name='Subscript'

      {...props}
    >
      <path d="M20.15 21.15V18.775Q20.15 18.025 20.663 17.512Q21.175 17 21.925 17H23.525V16.375H20.15V14.625H23.525Q24.275 14.625 24.788 15.125Q25.3 15.625 25.3 16.375V17Q25.3 17.75 24.788 18.262Q24.275 18.775 23.525 18.775H21.925V19.375H25.3V21.15ZM4.65 18.85 9.825 10.7 5 3.15H8.975L12 8L15 3.15H19L14.15 10.7L19.35 18.85H15.325L12 13.525L8.675 18.85Z"/>
    </Icon>
  )
});

export default IconMaterialSubscriptOutlinedW700;
