import { getFilesList } from '../utils/get-files-list';

export const Icons = getFilesList(require.context('./', true, /\.svg$/), 'svg');