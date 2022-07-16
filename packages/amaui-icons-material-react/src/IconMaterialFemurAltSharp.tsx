import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFemurAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurAltSharp'
      short_name='FemurAlt'

      {...props}
    >
      <path d="M18.5 21.5V10.925q0-1.8-.95-3.275-.95-1.475-2.575-2.2L8.55 2.525 7.5 4.25l6.65 3.025q1.1.475 1.725 1.463.625.987.625 2.187V21.5Zm-8.65.5H12q-.625-1.3-.825-2.763-.2-1.462-.187-2.725.012-1.262.125-2.087.112-.825.112-.85.075-.425-.2-.775-.275-.35-.7-.4-.025 0-.612-.088-.588-.087-1.513-.362-.925-.275-2.037-.8Q5.05 10.625 4 9.75L2.975 11.5q1.65 1.3 3.337 1.9Q8 14 9.1 14.225q.025 0 0 0-.075.6-.112 1.45-.038.85.012 1.863.05 1.012.25 2.15.2 1.137.6 2.312Zm3.65-9q-.425 0-.712-.288-.288-.287-.288-.712 0-.125.1-.425l-3.65-1.75q-.1.3-.35.487-.25.188-.6.188-.425 0-.713-.288Q7 9.925 7 9.5q0-.35.2-.6t.475-.35q-.075-.125-.125-.263Q7.5 8.15 7.5 8q0-.425.288-.713Q8.075 7 8.5 7t.713.287Q9.5 7.575 9.5 8q0 .1-.012.2-.013.1-.063.2l3.65 1.75q.1-.3.35-.475.25-.175.575-.175.425 0 .713.287.287.288.287.713 0 .325-.188.575-.187.25-.462.35.075.125.113.263.037.137.037.312 0 .425-.287.712-.288.288-.713.288ZM4 9.75q1.05.875 2.163 1.4 1.112.525 2.037.8.925.275 1.513.362.587.088.612.088.425.05.7.4.275.35.2.775 0 .025-.112.85-.113.825-.125 2.087-.013 1.263.187 2.725.2 1.463.825 2.763-.625-1.3-.825-2.763-.2-1.462-.187-2.725.012-1.262.125-2.087.112-.825.112-.85.075-.425-.2-.775-.275-.35-.7-.4-.025 0-.612-.088-.588-.087-1.513-.362-.925-.275-2.037-.8Q5.05 10.625 4 9.75Z"/>
    </Icon>
  );
});

export default IconMaterialFemurAltSharp;