import React from 'react';

import { AmauiTheme, classNames, style, useAmauiTheme } from '@amaui/style-react';

export const rtl_icons = [
  'arrow_back_ios', 'arrow_left', 'assignment_return', 'call_made', 'call_missed_outgoing', 'chevron_left', 'device_unknown', 'featured_play_list', 'flight_land', 'format_indent_increase', 'functions', 'input', 'label', 'last_page', 'live_help', 'navigate_before', 'note', 'queue_music', 'reply_all', 'short_text', 'star_half', 'toc', 'undo', 'wrap_text'
];

const useStyle = style(theme => ({
  root: {
    userSelect: 'none',
    display: 'inline-block',
    flexShrink: '0',
    color: 'inherit',
    fill: 'currentcolor',

    // Make width and height in em unit
    // means it will scale based on parent's font-size
    // so entire svg will scale based on font-size only
    width: '1em',
    height: '1em',

    transition: theme.methods.transitions.make(['fill', 'transform', 'filter'], { duration: 'sm', timing_function: 'standard' })
  },
  rtl: {
    transform: 'scaleX(-1)',
    filter: 'FlipH'
  },
  disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}));

const Icon = React.forwardRef((props: any, ref) => {
  const [rtl, setRtl] = React.useState(props.rtl);

  const { classes } = useStyle(props);

  const amauiTheme = useAmauiTheme();

  const {
    className,
    viewBox = '0 0 24 24',
    size: size_,
    name,
    short_name,
    color: color_,
    style,
    Component = 'svg',
    disabled,
    children,
    ...other
  } = props;

  React.useEffect(() => {
    // Update rtl based on amauiTheme value
    const method = (update, amauiTheme_: AmauiTheme) => {
      if (amauiTheme_.options.rule.rtl !== rtl) setRtl(!rtl);
    };

    amauiTheme.subscriptions.update.subscribe(method);

    return () => {
      amauiTheme.subscriptions.update.unsubscribe(method);
    };
  }, []);

  React.useEffect(() => {
    if (props.rtl !== rtl) setRtl(props.rtl);
  }, [props.rtl]);

  const color = (amauiTheme.palette.color[color_] as any)?.main || color_ || 'inherit';

  let fontSize = '24px';

  if (size_ === 'very small') fontSize = '12px';
  else if (size_ === 'small') fontSize = '18px';
  else if (size_ === 'regular') fontSize = '24px';
  else if (size_ === 'medium') fontSize = '36px';
  else if (size_ === 'large') fontSize = '48px';
  else if (size_ === 'very large') fontSize = '60px';
  else if (size_ !== undefined) fontSize = size_;

  const isRtlIcon = rtl_icons.includes(short_name);

  return (
    <Component
      ref={ref}

      className={classNames([classes.root, className, disabled && classes.disabled, rtl && isRtlIcon && classes.rtl])}

      // Default '0 0 24 24' for material icons
      viewBox={viewBox}

      // Prevents svg oversize on load
      width='1em'
      height='1em'

      style={{
        // Prevents svg fill update on load
        fill: 'currentcolor',

        color,
        fontSize,

        // Let styles override preset style
        ...style,
      }}

      {...other}
    >
      {children}
    </Component>
  );
});

export default Icon;
