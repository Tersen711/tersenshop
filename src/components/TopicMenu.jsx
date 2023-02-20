import React from "react";
import {Menu} from "antd";
const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
  const styledTopics = [];
  topics.forEach((topic, index) =>
    styledTopics.push(
      <Menu.Item key={index} onClick={changeSelectedKey}>
        {topic}
      </Menu.Item>
    )
  );
  
  return (
    // <div>
    //   <ul>
    //     {topics.map(topic => 
    //       <li>
    //         <a href={topic.href}>{topic.value}</a>
    //       </li>    
    //     )}
    //   </ul>
    // </div>
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
}
export default TopicMenu;