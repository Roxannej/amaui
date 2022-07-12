import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageRoundedW700Filled'
      short_name='Package'

      {...props}
    >
      <path d="M5.3 21.85q-1.325 0-2.238-.912-.912-.913-.912-2.238V5.3q0-1.325.912-2.238.913-.912 2.238-.912h13.4q1.325 0 2.238.912.912.913.912 2.238v13.4q0 1.325-.912 2.238-.913.912-2.238.912ZM9.95 12 12 11l2.05 1q.8.4 1.538-.062.737-.463.737-1.338V5.3h-8.65v5.3q0 .875.738 1.338.737.462 1.537.062Zm-2.2 5.7h2.8q.6 0 1.025-.425Q12 16.85 12 16.25q0-.6-.425-1.025-.425-.425-1.025-.425h-2.8q-.6 0-1.025.425-.425.425-.425 1.025 0 .6.425 1.025.425.425 1.025.425Z"/>
    </Icon>
  )
});

export default IconMaterialPackageRoundedW700Filled;