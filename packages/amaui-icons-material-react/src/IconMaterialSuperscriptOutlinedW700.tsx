import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSuperscriptOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptOutlinedW700'
      short_name='Superscript'

      {...props}
    >
      <path d="M20.15 9.775V7.375Q20.15 6.625 20.663 6.125Q21.175 5.625 21.925 5.625H23.525V5H20.15V3.225H23.525Q24.275 3.225 24.788 3.737Q25.3 4.25 25.3 5V5.625Q25.3 6.375 24.788 6.875Q24.275 7.375 23.525 7.375H21.925V8H25.3V9.775ZM4.65 20.85 9.825 12.7 5 5.15H8.975L12 10L15 5.15H19L14.15 12.7L19.35 20.85H15.325L12 15.525L8.675 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialSuperscriptOutlinedW700;
