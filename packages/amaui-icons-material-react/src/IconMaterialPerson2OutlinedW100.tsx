import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson2OutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2OutlinedW100'
      short_name='Person2'

      {...props}
    >
      <path d="M9.85 11.2q-.35 0-.575-.25-.225-.25-.175-.6l.3-2.375q.125-.95.875-1.563Q11.025 5.8 12 5.8q.975 0 1.725.612.75.613.875 1.563l.3 2.375q.05.35-.175.6-.225.25-.575.25Zm-.075-.7h4.45L13.9 8.1q-.1-.7-.637-1.15Q12.725 6.5 12 6.5q-.725 0-1.262.45-.538.45-.638 1.15ZM5.3 18.2v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 13.8 12 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Zm.7-.7h12v-.6q0-.35-.237-.662-.238-.313-.663-.538-1.2-.575-2.487-.888Q13.325 14.5 12 14.5t-2.613.312Q8.1 15.125 6.9 15.7q-.425.225-.662.538Q6 16.55 6 16.9Zm6 0Zm0-7Z"/>
    </Icon>
  )
});

export default IconMaterialPerson2OutlinedW100;