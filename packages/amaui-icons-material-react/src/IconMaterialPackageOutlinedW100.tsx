import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageOutlinedW100'
      short_name='Package'

      {...props}
    >
      <path d="m10 10.5 2-1 2 1V5h-4Zm-3 5.85v-.7h5v.7ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM5 5V19 5Zm.8 14h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5h-3.5v6.65L12 10.3l-2.7 1.35V5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  )
});

export default IconMaterialPackageOutlinedW100;
