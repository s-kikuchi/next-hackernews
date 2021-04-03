export const timeAgo = (time: number): string => {
  const between = Date.now() / 1000 - time;
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
};

const pluralize = (time: number, label: string): string => {
  if (time === 1) {
    return time + label;
  } else {
    return time + label + 's';
  }
};
