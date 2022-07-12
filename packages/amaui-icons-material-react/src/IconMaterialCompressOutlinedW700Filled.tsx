import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompressOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressOutlinedW700Filled'
      short_name='Compress'

      {...props}
    >
      <path d="M10.625 22.775V19.725L9.025 21.35L7.075 19.375L12 14.475L16.925 19.375L14.975 21.35L13.375 19.725V22.775ZM4 13.65V11.65H20V13.65ZM4 10.65V8.65H20V10.65ZM12 7.775 7.075 2.85 9.025 0.875 10.625 2.6V-0.525H13.375V2.6L14.975 0.875L16.925 2.85Z"/>
    </Icon>
  )
});

export default IconMaterialCompressOutlinedW700Filled;