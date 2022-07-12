import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldTwoTone'
      short_name='HouseWithShield'

      {...props}
    >
      <path d="M8.75 12.575q0 1.575.812 2.887.813 1.313 2.163 1.888.175.05.35.088.175.037.375.037t.362-.037q.163-.038.363-.088 1.35-.55 2.15-1.875.8-1.325.8-2.9V11.6q0-.65-.325-1.188-.325-.537-.925-.812l-1.425-.725q-.475-.225-1-.225t-1 .225L10 9.6q-.575.275-.912.812-.338.538-.338 1.188Zm-1.725 8.85q-1.275 0-2.15-.875T4 18.4v-8.125q0-.725.312-1.35.313-.625.888-1.075l5.425-4.025Q11.45 3.2 12.45 3.2t1.825.625l5.4 4.05q.6.425.9 1.063.3.637.3 1.362v8.1q0 1.275-.875 2.15t-2.15.875Z"/>
    </Icon>
  )
});

export default IconMaterialHouseWithShieldTwoTone;
