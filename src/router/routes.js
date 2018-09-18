
const layout = () => import('layouts/common');

//不作为Main组件的子页面展示的页面单独写，如下
const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import('pages/login')
};


const page403 = {
  path: '/403',
  name: '403',
  component: () => import('pages/403')
};

// 作为layout组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里(children至少包含一个子路由)
const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: layout,
  children: [
    {
      path: 'home',
      name: 'home_index',
      component: () => import('pages/index')
    },
    {
      path: 'userinfo',
      name: 'userinfo',
      component: () => import('pages/user/userinfo')
    },
    {
      path: 'requestlog',
      name: 'requestlog',
      component: () => import('pages/other/requestlog')
    }
  ]
};
// 作为layout组件的子页面展示并且在左侧菜单显示的路由写在appRouter里(children至少包含一个子路由)
const appRouter = [
  {
    path: '/cms',
    name: 'CMS',
    component: layout,
    children: [
      {
        path: 'article',
        name: 'article',
        component: () => import('pages/cms/post.vue')
      },
      {
        path: 'article/:id',
        name: 'post_edit',
        component: () => import('pages/cms/post_edit.vue')
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('pages/cms/comment.vue')
      },
    ]
  },
  {
    path: '/system',
    name: '系统设置',
    component: layout,
    children: [
      {
        path: 'menu',
        name: 'menu',
        component: () => import('pages/system/menu.vue')
      }
    ]
  },
  {
    path: '/permission',
    name: '权限管理',
    component: layout,
    children: [
      {
        path: 'function',
        name: 'function',
        component: () => import('pages/permission/function.vue')
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('pages/permission/role.vue')
      },
      {
        path: 'rolepermission',
        name: 'rolepermission',
        component: () => import('pages/permission/rolepermission.vue')
      },
      {
        path: 'roleuser',
        name: 'roleuser',
        component: () => import('pages/permission/roleuser.vue')
      },
      {
        path: 'userrole',
        name: 'userrole',
        component: () => import('pages/permission/userrole.vue')
      }
    ]
  },
  {
    path: '/organization',
    name: '组织架构',
    component: layout,
    children: [
      {
        path: 'department',
        name: 'department',
        component: () => import('pages/organization/department.vue')
      },
      {
        path: 'position',
        name: 'position',
        component: () => import('pages/organization/position.vue')
      }
    ]
  },
  {
    path: '/user',
    name: '用户管理',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'user_index',
        component: () => import('pages/user/user.vue')
      }
    ]
  },
  {
    path: '/business',
    name: 'business',
    component: layout,
    children: [
      {
        path: 'sku',
        name: 'sku',
        component: () => import('pages/develop/business/sku.vue')
      }
    ]
  }
];

const developRouter = [
  {
    path: '/official',
    name: 'official',
    component: layout,
    children: [
    ]
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routes = [
  loginRouter,
  page403,
  otherRouter,
  ...appRouter,
  ...developRouter
];
