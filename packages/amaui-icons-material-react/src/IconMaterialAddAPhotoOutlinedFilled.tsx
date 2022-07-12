import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAPhotoOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoOutlinedFilled'
      short_name='AddAPhoto'

      {...props}
    >
      <path d="M3 22Q2.175 22 1.588 21.413Q1 20.825 1 20V8Q1 7.175 1.588 6.588Q2.175 6 3 6H6.15L8 4H14V8H17V11H21V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM11 18.5Q12.875 18.5 14.188 17.188Q15.5 15.875 15.5 14Q15.5 12.125 14.188 10.812Q12.875 9.5 11 9.5Q9.125 9.5 7.812 10.812Q6.5 12.125 6.5 14Q6.5 15.875 7.812 17.188Q9.125 18.5 11 18.5ZM11 16.5Q9.95 16.5 9.225 15.775Q8.5 15.05 8.5 14Q8.5 12.95 9.225 12.225Q9.95 11.5 11 11.5Q12.05 11.5 12.775 12.225Q13.5 12.95 13.5 14Q13.5 15.05 12.775 15.775Q12.05 16.5 11 16.5ZM19 8V6H17V4H19V2H21V4H23V6H21V8Z"/>
    </Icon>
  )
});

export default IconMaterialAddAPhotoOutlinedFilled;
