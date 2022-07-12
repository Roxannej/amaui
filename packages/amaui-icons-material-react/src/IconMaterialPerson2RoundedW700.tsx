import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson2RoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2RoundedW700'
      short_name='Person2'

      {...props}
    >
      <path d="M10.525 11.5q-1.425 0-2.375-1.062Q7.2 9.375 7.4 7.95l.225-1.725q.2-1.625 1.463-2.675Q10.35 2.5 12 2.5t2.913 1.05q1.262 1.05 1.462 2.675L16.6 7.95q.2 1.425-.75 2.488-.95 1.062-2.375 1.062Zm-.3-2.9h3.55L13.5 6.65q-.125-.55-.537-.9Q12.55 5.4 12 5.4t-.962.35q-.413.35-.538.9ZM6.3 21.275q-1.325 0-2.238-.913-.912-.912-.912-2.237v-.55q0-1.075.563-1.988.562-.912 1.512-1.387 1.625-.8 3.325-1.213 1.7-.412 3.45-.412 1.8 0 3.5.4t3.275 1.2q.95.475 1.513 1.375.562.9.562 2.025v.55q0 1.325-.912 2.237-.913.913-2.238.913Zm0-3.15h11.4V17.7q0-.25-.138-.45-.137-.2-.362-.325-1.2-.575-2.5-.887-1.3-.313-2.7-.313-1.35 0-2.7.313-1.35.312-2.5.887-.225.125-.362.325-.138.2-.138.45Zm5.7 0ZM12 8.6Z"/>
    </Icon>
  )
});

export default IconMaterialPerson2RoundedW700;
