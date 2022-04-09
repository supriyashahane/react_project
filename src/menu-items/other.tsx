// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'roadmap',
            title: <FormattedMessage id="New Project" />,
            type: 'item',
            url: '/Layouts',
            icon: icons.IconSitemap,
            breadcrumbs: false
        },
        {
            id: 'sample-page',
            title: <FormattedMessage id="Project List" />,
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'Expired',
            title: <FormattedMessage id="Expired Projects" />,
            type: 'item',
            url: '/ExpiredLinks',
            icon: icons.IconHelp,
            breadcrumbs: false
        }
    ]
};

export default other;
