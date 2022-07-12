import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageOutlinedW700'
      short_name='Package'

      {...props}
    >
      <path d="M10.575 8.45 12 7.75l1.425.7V5.3h-2.85ZM6.3 17.7v-2.9H12v2.9Zm-1 4.15q-1.325 0-2.238-.912-.912-.913-.912-2.238V5.3q0-1.325.912-2.238.913-.912 2.238-.912h13.4q1.325 0 2.238.912.912.913.912 2.238v13.4q0 1.325-.912 2.238-.913.912-2.238.912Zm0-16.55v13.4V5.3Zm0 13.4h13.4V5.3h-2.375v7.85L12 11l-4.325 2.15V5.3H5.3v13.4Z"/>
    </Icon>
  )
});

export default IconMaterialPackageOutlinedW700;
