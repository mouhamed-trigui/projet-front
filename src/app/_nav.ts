interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Phase Cycle de vie'
  },
  {
    name: 'Formulaire',
    url: '/cycle-vie',
    icon: 'icon-check'
  },
  {
    name: 'List',
    url: '/admin/cycle',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Gestion Resource Humaine'
  },
  {
    name: 'Formulaire',
    url: '/rh',
    icon: 'icon-people',
    children: [
      {
        name: 'les Congés',
        url: '/rh/rhconge',
        icon: 'icon-people'
      },
      {
        name: 'les Permission',
        url: '/rh/rhpermission',
        icon: 'icon-people'
      },
      {
        name: 'Evaluation',
        url: '/rh/rhevaluation',
        icon: 'icon-people'
      },
      {
        name: 'Recrutement',
        url: '/rh/rhdemanderec',
        icon: 'icon-people'
      }
    ]
  },
  {
    name: 'Liste Affichage',
    url: '/admin',
    icon: 'icon-puzzle',
    children: [
       {
        name: 'List Conge',
        url: '/admin/rhcongelist',
        icon: 'icon-puzzle'
      },{
        name: 'Demande Rect',
        url: '/admin/Rhdemlist',
        icon: 'icon-puzzle'
      }
      ,{
        name: 'Evaluation',
        url: '/admin/rheval',
        icon: 'icon-puzzle'
      }
    ]
  },
  
  
  
  
  {
    divider: true
  },
  
  {
    title: true,
    name: 'Identification',
  },
 
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      
      
   
  
  
];
