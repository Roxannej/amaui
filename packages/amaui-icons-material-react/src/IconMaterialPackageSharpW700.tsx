import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageSharpW700'
      short_name='Package'

      {...props}
    >
      <path d="M10.575 8.45 12 7.75l1.425.7V5.3h-2.85ZM6.3 17.7v-2.9H12v2.9Zm-4.15 4.15V2.15h19.7v19.7ZM5.3 5.3v13.4V5.3Zm0 13.4h13.4V5.3h-2.375v7.85L12 11l-4.325 2.15V5.3H5.3Z"/>
    </Icon>
  )
});

export default IconMaterialPackageSharpW700;
