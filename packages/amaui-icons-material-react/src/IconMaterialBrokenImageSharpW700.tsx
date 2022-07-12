import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageSharpW700'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM6.275 11.675 10.075 7.875 13.925 11.725 17.775 7.875 18.7 8.8V5.3H5.3V10.725ZM5.3 18.7H18.7V13.325L17.725 12.35L13.925 16.175L10.075 12.325L6.25 16.15L5.3 15.2ZM5.3 18.7V13.325V16.475V11.95V8.8V5.3V10.7V15.2Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageSharpW700;
