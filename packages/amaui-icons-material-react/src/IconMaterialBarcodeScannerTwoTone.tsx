import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarcodeScannerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeScannerTwoTone'
      short_name='BarcodeScanner'

      {...props}
    >
      <path d="M.45 2.375h5.625v2.65H3.1V8H.45Zm17.5 0h5.625V8h-2.65V5.025H17.95Zm2.975 16.55V15.95h2.65v5.625H17.95v-2.65ZM3.1 15.95v2.975h2.975v2.65H.45V15.95Zm4-9.875h.975v11.8H7.1Zm-2.95 0h1.975v11.8H4.15Zm5.9 0h1.975v11.8H10.05Zm6.9 0h.975v11.8h-.975Zm1.975 0h.975v11.8h-.975Zm-5.925 0h2.975v11.8H13Z"/>
    </Icon>
  )
});

export default IconMaterialBarcodeScannerTwoTone;