import { format } from 'date-fns';

export const formatReleaseDate = date => {
  return format(Date.parse(date), 'y');
};
