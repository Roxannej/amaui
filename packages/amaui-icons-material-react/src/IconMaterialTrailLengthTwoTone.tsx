import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthTwoTone'
      short_name='TrailLength'

      {...props}
    >
      <path d="M6.675 17.5V14.475H12.125Q11.95 14.225 11.85 13.988Q11.75 13.75 11.7 13.5H8.675V10.475H11.7Q11.75 10.25 11.85 10Q11.95 9.75 12.125 9.5H2.5V6.475H17Q19.3 6.475 20.913 8.087Q22.525 9.7 22.525 12Q22.525 14.275 20.913 15.887Q19.3 17.5 17 17.5ZM1.5 13.5V10.475H7.75V13.5ZM2.5 17.5V14.475H5.75V17.5Z"/>
    </Icon>
  )
});

export default IconMaterialTrailLengthTwoTone;