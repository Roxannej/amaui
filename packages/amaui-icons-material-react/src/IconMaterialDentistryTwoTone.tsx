import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDentistryTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DentistryTwoTone'
      short_name='Dentistry'

      {...props}
    >
      <path d="M17 1.925q1.775 0 2.988 1.212Q21.2 4.35 21.2 6.125q0 .275-.025.725-.025.45-.125 1.075L19.675 18q-.175 1.05-.963 1.688-.787.637-1.787.637-.575 0-1.125-.263-.55-.262-.9-.787L12.225 15.4q-.05-.025-.112-.063-.063-.037-.138-.037l-.25.15-2.6 3.775q-.35.525-.912.813-.563.287-1.188.287-.975 0-1.762-.65-.788-.65-.938-1.7l-1.35-10.05Q2.9 7.3 2.863 6.85q-.038-.45-.038-.725 0-1.775 1.212-2.988Q5.25 1.925 7 1.925q.95 0 1.525.237.575.238 1.05.538.475.275 1 .5.525.225 1.425.225t1.425-.225q.525-.225 1-.5.5-.3 1.075-.538.575-.237 1.5-.237Z"/>
    </Icon>
  )
});

export default IconMaterialDentistryTwoTone;