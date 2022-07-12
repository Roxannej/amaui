import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageRoundedW700'
      short_name='Package'

      {...props}
    >
      <path d="m10.575 8.45.375-.175q.5-.25 1.05-.25t1.05.25l.375.175V5.3h-2.85ZM7.75 17.7q-.6 0-1.025-.425Q6.3 16.85 6.3 16.25q0-.6.425-1.025.425-.425 1.025-.425h2.8q.6 0 1.025.425.425.425.425 1.025 0 .6-.425 1.025-.425.425-1.025.425ZM5.3 21.85q-1.325 0-2.238-.912-.912-.913-.912-2.238V5.3q0-1.325.912-2.238.913-.912 2.238-.912h13.4q1.325 0 2.238.912.912.913.912 2.238v13.4q0 1.325-.912 2.238-.913.912-2.238.912Zm0-16.55v13.4V5.3Zm0 13.4h13.4V5.3h-2.375v5.3q0 .875-.737 1.338-.738.462-1.538.062L12 11l-2.05 1q-.8.4-1.537-.062-.738-.463-.738-1.338V5.3H5.3v13.4Z"/>
    </Icon>
  )
});

export default IconMaterialPackageRoundedW700;
