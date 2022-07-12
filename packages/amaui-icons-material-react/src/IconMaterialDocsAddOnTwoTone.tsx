import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDocsAddOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsAddOnTwoTone'
      short_name='DocsAddOn'

      {...props}
    >
      <path d="M19.625 5.45H3.4V2.425H19.625ZM3.4 10.15V7.125H19.625V10.15ZM3.4 14.85V11.825H13.025Q12.275 12.4 11.738 13.162Q11.2 13.925 10.9 14.85ZM3.4 16.525H10.525Q10.525 16.625 10.512 16.75Q10.5 16.875 10.5 17Q10.5 17.675 10.65 18.325Q10.8 18.975 11.125 19.55H3.4ZM15.5 21.475V18.475H12.5V15.45H15.5V12.45H18.525V15.45H21.525V18.475H18.525V21.475Z"/>
    </Icon>
  )
});

export default IconMaterialDocsAddOnTwoTone;
