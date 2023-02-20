import React from "react";
import '.././styles/Sidebar.css'
import { Layout } from "antd";

const Sidebar = ({ menu }) => {
    return (
        <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
   </Layout.Sider>
        // <div>
        //     <aside className="ant-layout-sider ant-layout-sider-light site-layout-background">
        //         <div className="ant-layout-sider-children">
        //             <ul className="ant-menu ant-menu-root ant-menu-vertical ant-menu-light ant-menu-inline-collapsed" role="menu" tabindex="0" data-menu-list="true">
        //                 <li className="ant-menu-item" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-90692-15-1">
        //                     <span role="img" aria-label="home" className="anticon anticon-home ant-menu-item-icon">
        //                         <svg viewBox="64 64 896 896" focusable="false" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        //                         <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z">   
        //                         </path>
        //                         </svg>
        //                     </span>
        //                     <span className="ant-menu-title-content">
        //                         <a href="/">Главная</a>
        //                     </span>
        //                 </li>
        //                 <li className="ant-menu-submenu ant-menu-submenu-vertical" role="none">
        //                     <ul className="ant-menu ant-menu-sub ant-menu-inline" id="rc-menu-uuid-90692-15-sub1-popup" data-menu-list="true">
        //                         <li role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-90692-15-4" className="ant-menu-item">
        //                             <span role="img" aria-label="team" className="anticon anticon-team ant-menu-item-icon">
        //                                 <svg viewBox="64 64 896 896" focusable="false" data-icon="team" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        //                                 <path d="M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"></path>
        //                                 </svg>
        //                             </span>
        //                             <span className="ant-menu-title-content">
        //                                 <a href="/1str">Страница 1</a>
        //                             </span>
        //                         </li>
        //                         <li role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-90692-15-5" className="ant-menu-item">
        //                             <span role="img" aria-label="security-scan" className="anticon anticon-security-scan ant-menu-item-icon">
        //                                 <svg viewBox="64 64 896 896" focusable="false" data-icon="security-scan" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        //                                 <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM402.9 528.8l-77.5 77.5a8.03 8.03 0 000 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.7 35.1 130.1 28.4 178.6-20.1 56.3-56.3 56.3-147.5 0-203.8-56.3-56.3-147.5-56.3-203.8 0-48.5 48.5-55.2 123-20.1 178.6zm65.4-133.3c31.3-31.3 82-31.3 113.2 0 31.3 31.3 31.3 82 0 113.2-31.3 31.3-82 31.3-113.2 0s-31.3-81.9 0-113.2z"></path>
        //                                 </svg>
        //                             </span>
        //                             <span className="ant-menu-title-content">
        //                                 <a href="/2str">Страница 2</a>
        //                             </span>
        //                         </li>
        //                         <li role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-90692-15-6" className="ant-menu-item">
        //                             <span role="img" aria-label="appstore" className="anticon anticon-appstore ant-menu-item-icon">
        //                                 <svg viewBox="64 64 896 896" focusable="false" data-icon="appstore" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        //                                 <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path>
        //                                 </svg>
        //                             </span>
        //                             <span className="ant-menu-title-content">
        //                                 <a href="/3str">Страница 3</a>
        //                             </span>
        //                         </li>
        //                         <li role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-90692-15-7" className="ant-menu-item">
        //                             <span role="img" aria-label="file-protect" className="anticon anticon-file-protect ant-menu-item-icon">
        //                                 <svg viewBox="64 64 896 896" focusable="false" data-icon="file-protect" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        //                                 <path d="M644.7 669.2a7.92 7.92 0 00-6.5-3.3H594c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.8-5.3 0-12.7-6.5-12.7h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-22.9-31.9zM688 306v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 458H208V148h560v296c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h312c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm402.6-320.8l-192-66.7c-.9-.3-1.7-.4-2.6-.4s-1.8.1-2.6.4l-192 66.7a7.96 7.96 0 00-5.4 7.5v251.1c0 2.5 1.1 4.8 3.1 6.3l192 150.2c1.4 1.1 3.2 1.7 4.9 1.7s3.5-.6 4.9-1.7l192-150.2c1.9-1.5 3.1-3.8 3.1-6.3V538.7c0-3.4-2.2-6.4-5.4-7.5zM826 763.7L688 871.6 550 763.7V577l138-48 138 48v186.7z"></path>
        //                                 </svg>
        //                             </span>
        //                             <span className="ant-menu-title-content">
        //                                 <a href="/4 str">Страница 4</a>
        //                             </span>
        //                         </li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //          <div className="menu" aria-hidden="true"></div>
        //         </div>
        //     </aside>    
        // </div>
    )
}

export default Sidebar;