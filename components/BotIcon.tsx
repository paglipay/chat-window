/** @jsx jsx */
import {jsx} from 'theme-ui';

export const BotIcon = ({
  width,
  height,
  fill,
  className,
}: {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      className={className}
      data-icon="robot"
      width={width || '1em'}
      height={height || '1em'}
      sx={{fill: fill || 'black'}}
    >
      <path d="M300 328a60 60 0 10120 0 60 60 0 10-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 10120 0 60 60 0 10-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
    </svg>
  );
};

export default BotIcon;
